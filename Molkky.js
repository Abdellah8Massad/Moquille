class Molkky {
    
    
    constructor() 
    {
      this._score = 0;
    }

    calc_score(nb,ql){
        if(nb > 1)
        {
            this._score = this._score + nb; 
        }
        else if(nb === 1 )
        {
            this._score = this._score + ql;
        }
    }

    calc_victoire(){
        if(this._score>50)
        {
            this._score=25;
        }
        else if(this._score === 50)
        {
            this._score="victoire!!!";
        }
        return this._score;
    }
  }
  