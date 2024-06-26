export class InputHandler{
    constructor(game){
        this.game = game;
        this.keys =[];
        window.addEventListener('keydown',(e) => {
            // console.log(e.key);
            if((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === ' '
            ) && this.keys.indexOf(e.key)===-1){
                this.keys.push(e.key);
            } else if (e.key === 'd') this.game.debug = !this.game.debug;
            else if (e.key === 'b') this.game.changeBackground = !this.game.changeBackground;
            // console.log(this.keys);
        })
        window.addEventListener('keyup', (e) => {
            if((e.key === 'ArrowDown' ||
            e.key === 'ArrowUp' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === ' '
            
        )){
            this.keys.splice(this.keys.indexOf(e.key),1);
        }
        // console.log(this.keys);
        })
    }
}