describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("calculates score for a gutter game", function() {
    rollMany(0,20);
    expect(game.score()).toBe(0);
  });

  it("calculates score if all ones", function() {
    rollMany(1,20);
    expect(game.score()).toBe(20);
  });
  it("calculates score for a spare", function(){
    game.roll(4);
    game.roll(6);
    game.roll(3);
    game.roll(4);
    rollMany(0,16);
    expect(game.score()).toBe(20);
  })
    function rollMany(pins, rolls) {
    for(i = 0; i < rolls; i++) {
      game.roll(pins);
    }}
});
