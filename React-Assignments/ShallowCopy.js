
export class ShallowCopy{
    shallowCopyOfList(list){
        return [...list];
    }

    shallowCopyOfObject(object){
        return {...object};
    }
}