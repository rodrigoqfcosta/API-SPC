import * as _ from 'lodash';
import * as moment from 'moment';


const assertArgumentEquals = (aValor1, aValor2, aMessage) =>{
    if(_.isEqual(aValor1,aValor2) || _.isEqualWith(aValor1, aValor2))
    {
        return aMessage
    }
}
const assertArgumentNotEquals = (aValor1, aValor2, aMessage) =>{
    if(!_.isEqual(aValor1,aValor2))
    {
        console.log( "VALOR 1 ==> :" + aValor1)
        console.log( "VALOR 2 ==> :" + aValor2)
        return aMessage
    }
}

const assertArgumentFalse = (aboolean:Boolean, aMessage) => {
    if(aboolean){
        return aMessage
    }
}

const assertArgumentLengthMax = (aString: string, aMaximum, aMessage) =>{
    const alength = String (aString).trim().length
    if(alength>aMaximum)
    {
        return aMessage
    }
}

const assertArgumentLengthMin = (aString: string,aMinimun,aMessage) => {
    const alength = String (aString).trim().length
    if(alength < aMinimun)
    {
        return aMessage
    }
}

const assertArgumentLength = (aString, aMinimun, aMaximun, aMessage)=>{
    const aLength = String (aString).trim().length
    

    if(aLength > aMaximun || aLength < aMinimun)
    {
        return aMessage
    }

}

const assertArgumentLengthXls = (aString, aMessage)=>{
    const aLength = String (aString).trim().length
    
    console.log(aLength)
    if(aLength == 14 || aLength == 11)
    {
        return 
    }else {
        return aMessage
    }

}

const assertArgumentNotEmpty = (aString, aMessage)=>{
    aString = _.toString(aString)
    if(aString == null || aString.trim().length == 0)
    {
        return aMessage
    }
}

const assertArgumentRange = (aNumber,aMimun,aMaximun,aMessage) => {
    if(aNumber < aMimun || aNumber > aMaximun)
    {
        return aMessage
    }
}

const assertArgumentRangeNotMax = (aNumber, aMinimun, aMaximun, aMessage)=>{
    if(!_.inRange(aNumber,aMinimun,aMaximun))
    {
        return aMessage
    }
}

const assertArgumentNull = (aString, aMessage) =>{
    if(aString == null || _.isEmpty(aString) || _.isEqualWith(aString,"") || aString == "")
    {
        return aMessage
    }
}

const assertArgumentNotNull = (aObject,aMessage) =>{
    if(aObject == null || _.isEmpty(aObject))
    {
        return aMessage
    }
}

const assertArgumentTrue = (aboolean:Boolean, aMessage) => {
    if(!aboolean){
        return aMessage
    }
}

const assertArgumentDateMin = (aDate,aDateMin,aMessage,aYear = 0) =>{
    const date = moment(aDate);
    if(date.diff(moment(aDateMin).format('YYYY-MM-DD'), 'years', true) < aYear)
    {
        return aMessage
    }
}

const assertArgumentDateMax = (aDate,aDateMax,aMessage,aYear = 3) =>{
    const date = moment(aDate);
    if(date.diff(moment(aDateMax).format('YYYY-MM-DD'), 'years', true) > aYear)
    {
        return aMessage
    }
}

const assertArgumentDateMinMonths = (aDate,aDateMin,aMessage,aMonths = 0) =>{
    const date = moment(aDate);
    if(date.diff(moment(aDateMin).format('YYYY-MM-DD'), 'months', true) < aMonths)
    {
        return aMessage
    }
}

export { 
    assertArgumentNotEquals, 
    assertArgumentFalse, 
    assertArgumentLengthMax, 
    assertArgumentLengthMin, 
    assertArgumentLength,
    assertArgumentNotEmpty,
    assertArgumentRange,
    assertArgumentRangeNotMax,
    assertArgumentNotNull,
    assertArgumentTrue,
    assertArgumentDateMin,
    assertArgumentDateMax,
    assertArgumentDateMinMonths,
    assertArgumentEquals,
    assertArgumentNull,
    assertArgumentLengthXls
 }