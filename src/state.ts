const globalState={
    autoAnswer: true,
    start: function(){
        this.autoAnswer=true
        console.log('腾讯自动回复已启动')
    },
    close: function(){
        this.autoAnswer=false
        console.log('腾讯自动回复已关闭')
    }
    
}

export default  globalState 