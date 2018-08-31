window.App = {
    /**
     * @desc - 全局绑定事件
     * @param  {String}   evts 事件类型，多个事件用空格分隔
     * @example App.on('xxxx', fn)
     */
    on(evts, fn){
        document.addEventListener(evts, fn, false)
    },

    /**
     * @desc - 全局移除事件
     * @param  {String}   evt    事件类型
     * @example App.off('xxxx', fn)
     */
    off(evt, fn){
        document.removeEventListener(evt, fn, false)
    },
    /**
     * @desc - 全局分发⌚️
     * @param  {String}   evt    事件类型
     * @example App.off('xxxx', fn)
     */
    dispatch (evt){
        document.dispatchEvent(evt)
    }
}
