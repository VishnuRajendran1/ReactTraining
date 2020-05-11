
import { WorkshopExamples } from './WorkshopExamples.js';
import { ShallowCopy } from './ShallowCopy.js';
import { DeepCopy } from './DeepCopy.js';


//Assignment1:  Compilation of workshop examples. 
const workshopExamples = new WorkshopExamples();
workshopExamples.compilationOfExamples();

//Assignment2: shallow copy of a list using ES6 feature
let testListShallow = [['car', 'bike'], 'bus', 'jeep'];

const shallowCopy = new ShallowCopy();
let shallowCopyList = shallowCopy.shallowCopyOfList(testListShallow);
console.log(`testListShallow before shallowCopyList change: ${testListShallow}`);
shallowCopyList[1]='train';
shallowCopyList[0][0]='bicycle';
console.log(`testListShallow after shallowCopyList change: ${testListShallow}`);
console.log(`ShallowCopyList: ${shallowCopyList}`);

//Assignment3: shallow copy of an object using ES6 feature
let testObjectShallow = { name: { firstName: 'firstName', lastName: 'lastName' }, address: 'testAddress', place: 'testPlace' };

let shallowCopyObject = shallowCopy.shallowCopyOfObject(testObjectShallow);
console.log(`testObjectShallow before shallowCopyObject change: ${JSON.stringify(testObjectShallow)}`);
shallowCopyObject.address='newAddress';
shallowCopyObject.name.firstName='testName';
console.log(`testObjectShallow after shallowCopyObject change: ${JSON.stringify(testObjectShallow)}`);
console.log(`ShallowCopyObject: ${JSON.stringify(shallowCopyObject)}`);

//Assignment4: deep copy of a list without using any third party library
let testListDeep = [['car', 'bike'], 'bus', 'jeep'];

const deepCopy = new DeepCopy();
let deepCopyList = deepCopy.deepCopyOfList(testListDeep);
console.log(`testListDeep before deepCopyList change: ${testListDeep}`);
deepCopyList[1]='train';
deepCopyList[0][0]='bicycle';
console.log(`testListDeep after deepCopyList change: ${testListDeep}`);
console.log(`ShallowCopyList: ${deepCopyList}`);

//Assignment5: deep copy of an object without using any third partylibrary
let testObjectDeep = { name: { firstName: 'firstName', lastName: 'lastName' }, address: 'testAddress', place: 'testPlace' };

let deepCopyObject = deepCopy.deepCopyOfObject(testObjectDeep);
console.log(`testObjectDeep before deepCopyObject change: ${JSON.stringify(testObjectDeep)}`);
deepCopyObject.address='newAddress';
deepCopyObject.name.firstName='testName';
console.log(`testObjectDeep after deepCopyObject change: ${JSON.stringify(testObjectDeep)}`);
console.log(`deepCopyObject: ${JSON.stringify(deepCopyObject)}`);

//Assignment6:  Is the Fetch API an ECMAScript feature ?
//No. It is a part of the Web platform API.