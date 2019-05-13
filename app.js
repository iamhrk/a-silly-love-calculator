
//A funny algotrithm has been used here, to calculate the love % between two user input names.
//Algorithm can be found in this link--- https://www.codebrainer.com/blog/love-calculator-android
//Program written by Harikrishnan K R, https://harikrishnan.dev
function loveCalculate(){

    const partnerOneName = document.getElementById('uname').value.toLowerCase();
    const partnerTwoName = document.getElementById('pname').value.toLowerCase();
    let combinedName = "";
    if(partnerOneName =="" || partnerTwoName == ""){
      document.getElementById('output').innerHTML = 'Please enter some data'+'<i class="fas fa-heart-broken"></i>';
      return; //return if no data is given by user
    }
    else if(partnerOneName === partnerTwoName){
      document.getElementById('output').innerHTML = '100%';
      return;//same names should have 100% result! If calculated by algoithm it won't be 100% all names.
    }
    //combine names by concatinating 'loves' in between them,localeCompare helps to combine names in alphabetical order
    else if(partnerOneName.localeCompare(partnerTwoName)===-1){
          combinedName = partnerOneName + 'loves' + partnerTwoName;
        }
    else if(partnerOneName.localeCompare(partnerTwoName)===1){
          combinedName = partnerTwoName + 'loves' + partnerOneName;
        }
    else{
          combinedName = partnerOneName + 'loves' + partnerTwoName;
        }
    stringArray = [];
    checkedChar = [];
    countArray = [];
    //save the string to an array
    stringArray = combinedName.split('');

    let count;
    let flag;
    for(let i=0; i<=stringArray.length; i++){
        let character = stringArray[i];
        flag = 0;
        count = 0;
        for(let j=0; j<=checkedChar.length; j++)
        {
            //check if the string has already been checked once
            if(character === checkedChar[j]){
              flag=1;
            }
        }
        //if it's an unchecked character set count equal to total number of such characters
        if(flag === 0 )
        {
          for(let k=i; k<=stringArray.length; k++)
          {
            if(character === stringArray[k])
            {
              count = count + 1;
            }
          }
          //once checked push the character to the checkedChar array
          checkedChar.push(character);
          //save the count of character to countArray
          countArray.push(count);

        }

    }
    let countString = countArray.join('');

 //find the final love percentage
  while(countString.length > 2){

      let iteration = countArray.length;

        for(i = 0; i<iteration-1; i++){
          if(i === countArray.length-1){
            countArray[i]=countArray[i];
            break;
          }
          else{
            countArray[i] = countArray[i] + countArray[countArray.length-1];
            countArray.pop();
            iteration = countArray.length;

        }
      }

      countString = countArray.join('');
    }
    //print final percentage
      document.getElementById('output').innerHTML = `${countString} %`;
}
