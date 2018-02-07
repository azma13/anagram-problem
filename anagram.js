function removeSpecial(s){
 return s.replace(/[^a-z0-9]/ig,'')
}

function testAnagram (s1, s2){
 if(!s1 || !s2 || s1.length !== s2.length){
   return false;
 }
 var lS1 = s1.toLowerCase();
 var lS2 = s2.toLowerCase();
 //if(lS1 === lS2) {
 //  return false;
 //}
 var rS1 = lS1.split('').sort().join('');
 var rS2 = lS2.split('').sort().join('');
 return rS1 === rS2;
}

function compareSpecial(s1,s2){
var s1 = removeSpecial(s1)
var s2 = removeSpecial(s2)

if (s1.match(/[0-9]/) || s2.match(/[0-9]/))  {
 return ( "Invalid Input" );  
 } else {
	return testAnagram (s1, s2);
  }
}
console.log(compareSpecial('edh','edh'))