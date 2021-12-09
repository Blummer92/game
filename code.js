var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["815b5d0f-4623-4220-8252-49a3bbb3230b","c8196d0b-f6cb-4f57-b265-f7352d9e687b","a6f94378-09b1-478b-8b5d-a3e3053269fe","4726241a-6402-4f67-97a7-897c74626bba"],"propsByKey":{"815b5d0f-4623-4220-8252-49a3bbb3230b":{"name":"blue_shirt_hand_up_1","sourceUrl":null,"frameSize":{"x":190,"y":392},"frameCount":2,"looping":true,"frameDelay":12,"version":"zNwduwgYfqX1gtlWLGAVJup0Gxm_txvm","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":392},"rootRelativePath":"assets/815b5d0f-4623-4220-8252-49a3bbb3230b.png"},"c8196d0b-f6cb-4f57-b265-f7352d9e687b":{"name":"car1_1","sourceUrl":null,"frameSize":{"x":368,"y":174},"frameCount":1,"looping":true,"frameDelay":12,"version":"XYueORlnhEWs2zllTMZs28ewXKCON6vu","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":368,"y":174},"rootRelativePath":"assets/c8196d0b-f6cb-4f57-b265-f7352d9e687b.png"},"a6f94378-09b1-478b-8b5d-a3e3053269fe":{"name":"car1_2","sourceUrl":null,"frameSize":{"x":368,"y":174},"frameCount":1,"looping":true,"frameDelay":12,"version":"EgwbuP1OeX0kprB.F04Mce0wJXc5Luun","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":368,"y":174},"rootRelativePath":"assets/a6f94378-09b1-478b-8b5d-a3e3053269fe.png"},"4726241a-6402-4f67-97a7-897c74626bba":{"name":"cloud","sourceUrl":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



  

  var cloud1 = createSprite(49,95);
  var cloud2 = createSprite(200,95);
  cloud1.setAnimation("cloud");
  cloud2.setAnimation("cloud");
  cloud2.scale=0.5;
  
  var man = createSprite(200, 200);
  man.setAnimation("blue_shirt_hand_up_1");
  man.scale = 0.5;
  
  var car1 = createSprite(200, 300);
  var car2 = createSprite(0, 300);
  car1.setAnimation("car1_1");
  car2.setAnimation("car1_2");
  

  
function draw() {
  



  background("lightblue");
  rect(0, 300, 400, 200);
  
  car2.x=car2.x+2;
  car1.x=car1.x+2;
  drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
