export class DeepCopy{
    deepCopyOfList(list){
        return JSON.parse(JSON.stringify(list));
    }

    deepCopyOfObject(object){
        return JSON.parse(JSON.stringify(object));
    }
}