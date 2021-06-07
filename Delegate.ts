let increasId = 0;

export class Delegate<T extends Function>
{
    private funcs: Wrapper<T>[] = [];
    private id2index = new Map<number, number>();
    add(func: T, caller?: any) {
        let wrapper = { func: func, caller: caller }
        this.id2index.set(++increasId, this.funcs.push(wrapper) - 1);
        return increasId;
    }

    remove(func: T | number, caller?: any) {
        let index;
        if (typeof func === 'number') {
            index = this.id2index.get(func);
        }
        else {
            for (let i = 0; i < this.funcs.length; i++) {
                let wrapper = this.funcs[i]
                if (wrapper.caller === caller && wrapper.func === func) {
                    index = i;
                    break;
                }
            }
        }
        if (index != null)
            this.funcs.splice(index, 1);
    }
    invoke :T|Function = this.invokeImplement;

    invokeImplement(...arg: any)
    {
        for (let wrapper of this.funcs) {
            wrapper.func?.call(wrapper.caller,...arg);
        }
    }
}

class Wrapper<T extends Function> {
    func: T | null = null;
    caller: any = null;
}