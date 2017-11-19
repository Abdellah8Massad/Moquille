chai.should();
describe("Decrit le jeu du Molkky", () => {
    
    let monMolkky;
    let resulat;
    
    beforeEach(() => {
        monMolkky = new Molkky();
    });

    it('1 quille tombée : score += n de la quille', ()=>{
        monMolkky.calc_score(1,12);
        resulat = monMolkky.calc_victoire();
        resulat.should.equal(12);
    });

    it('n quilles tombées : score += nb de la quille', ()=>{
        monMolkky.calc_score(1,12);
        monMolkky.calc_score(12,0);

        resulat = monMolkky.calc_victoire();
        
        resulat.should.equal(24);
    });

    it('score = 50 alors victoire', ()=>{
        monMolkky.calc_score(1,12);
        monMolkky.calc_score(12,0);
        monMolkky.calc_score(1,12);
        monMolkky.calc_score(12,0);
        monMolkky.calc_score(1,2);

        resulat = monMolkky.calc_victoire();

        resulat.should.equal("victoire!!!");
    });

    it('score > 50 retour a 25', ()=>{
        monMolkky.calc_score(1,12);
        monMolkky.calc_score(12,0);
        monMolkky.calc_score(1,12);
        monMolkky.calc_score(12,0);
        monMolkky.calc_score(1,5);

        resulat = monMolkky.calc_victoire();
        
        resulat.should.equal(25);
    });
   
});