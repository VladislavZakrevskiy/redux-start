export function useTemplate(cbHook, ...hookArgs){
    return function(cb, ...args){
        const item = cbHook(...hookArgs)
        if(item){
            cb(...args)
        }
    }
}