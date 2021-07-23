//Play area
var area1,area2,roomImg;

//PC & NPC
var bot1,bot2;
var char1Img,char2Img,char3Img,char4Img,char5Img;

//End points
var end1,end2,endImg;

//BackGround IMGs
var bg1,bg1Img;
var bg2,bg2Img;
var bg3,bg3Img;

//Collision detectors
var br7;
var mouse;
var potion1,potion2,potionImg;

//Obstacles
var wall1,wall2,wall3,wall4;
var wallImg;

//Buttons
var playBtn,playBtnImg;
var instBtn,instBtnImg;
var cutomizeBtn,customizeBtnImg;
var homeBtn,homeBtnImg;
var startBtn1,startBtnImg;
var startBtn2;
var startBtn3;
var startBtn4;
var startBtn5;
var backBtn,backBtnImg;

//Game designs
var avatar1,avatar2,avatar3,avatar4,avatar5;
var level1Slide,level1SlideImg,level2Slide,level2SlideImg;
var level3Slide,level3SlideImg,level4Slide,level4SlideImg;
var level5Slide,level5SlideImg;
var levelBonus1;
var level6Slide;
var scroll,bar;
var slider;

//Sounds
var bgm;
var bgm2;
var winsound;

//Initial level
var level = 0;
var endMsg1;
var endMsg2;
var endMsg3;
var endMsg4;
var endMsg5;
var infinityGame1;

//Feedback (level completion)
var msg1,msg1Img;
var msg2,msg2Img;
var msg3,msg3Img;
var msg4,msg4Img;
var msg5,msg5Img;

//Infinity runner assets
var player,playerImg;
var ground;
var border1,border2;
var enemy,enemyGroup;
var bg,bgImg;
var enemyImg;
var finish, finishImg;

var Yposition = -1500;
var score = 0;


function preload(){
  
  //Loading Sounds
  bgm = loadSound("bgm.mp3");
  bgm2 = loadSound("bgm2.mp3");
  winsound = loadSound("winsound.mp3");
  
  //Loading all Images
  char1Img = loadImage("char1.png");
  char2Img = loadImage("char2.png");
  char3Img = loadImage("char3.png");
  char4Img = loadImage("char4.png");
  char5Img = loadImage("char5.png");
  bg1Img = loadImage("bg1.jpg");
  bg2Img = loadImage("bg2.jpg");
  bg3Img = loadImage("bg3.jpg");
  endImg = loadImage("end.png");
  roomImg = loadImage("room.png");
  wallImg = loadImage("wall.png");
  potionImg = loadImage("potion.png");
  
  playBtnImg = loadImage("play.png");
  instBtnImg = loadImage("how to play.png");
  customizeBtnImg = loadImage("customize.png");
  startBtnImg = loadImage("start.png");
  homeBtnImg = loadImage("home.png");
  backBtnImg = loadImage("back.png");
  
  level1SlideImg = loadImage("l1.jpg");
  level2SlideImg = loadImage("l2.jpg");
  level3SlideImg = loadImage("l3.jpg");
  level4SlideImg = loadImage("l4.jpg");
  level5SlideImg = loadImage("l5.jpg");
  
  msg1Img = loadImage("msg1.jpg");
  msg2Img = loadImage("msg2.jpg");
  msg3Img = loadImage("msg3.jpg");
  msg4Img = loadImage("msg4.jpg");
  msg5Img = loadImage("msg5.jpg");
  
  //Infinity runner Img's
  bgImg = loadImage("space.jpg");
  enemyImg = loadImage("enemy.png");
  finishImg = loadImage("finish.png");

}

function setup (){
  
  createCanvas(600,400);
  
  bgm.loop();

  //Objects for Infinity game
  bg = createSprite(300,-220,600,400);
  bg.addImage("bg",bgImg);
  bg.scale = 1;
  bg.visible = false;
  
  player = createSprite(300,350,20,50);
  player.addImage("char1",char1Img);
  player.scale = 0.26;
  player.visible = false;
  
  finish = createSprite(300,-1300,20,50);
  finish.addImage("finish",finishImg);
  finish.scale = 0.6;
  //finish.debug = true;
  finish.setCollider("rectangle",0,150,200,50);
  
  ground = createSprite(300,390,600,20);
  ground.visible = false;
  
  border1 = createSprite(100,-200,20,1200);
  border1.visible = false;

  border2 = createSprite(500,-200,20,1200);
  border2.visible = false;

  enemyGroup = createGroup();

  
  
  bg3 = createSprite(300,200,600,400);
  bg3.addImage("dark bg",bg3Img);
  bg3.scale = 1.45;
  bg3.visible = false;
  
  //Play areas
  area1 = createSprite(150,200,250,250);
  area1.shapeColor = "violet";
  area1.addImage("room",roomImg);
  area1.scale = 0.58;
  
  area2 = createSprite(450,200,250,250);
  area2.shapeColor = "violet"; 
  area2.addImage("room",roomImg);
  area2.scale = 0.58;
  
  end1 = createSprite(150,100,50,20);
  end1.addImage("end",endImg);
  //end1.debug = true;
  end1.setCollider("rectangle",-30,-20,5,2);
  
  end2 = createSprite(450,100,50,20);
  end2.addImage("end",endImg);
  //end2.debug = true;
  end2.setCollider("rectangle",-30,-20,5,2);
  

  //Characters
  bot1 = createSprite(150,200,50,50);
  //bot1.addImage("char1",char1Img);
  bot1.scale = 0.26;
  //bot1.debug = true;
  bot1.shapeColor = "cyan";
  
  bot2 = createSprite(450,200,50,50);
  bot2.addImage("char5",char5Img);
  bot2.scale = 0.26;
  //bot2.debug = true;
  

  //Collider
  br7 = createSprite(315,200,20,250);
  br7.visible = false;
  
  
  bg1 = createSprite(300,200,600,400);
  bg1.addImage("gaming bg",bg1Img);
  bg1.scale = 1.4;
  
  bg2 = createSprite(300,200,600,400);
  bg2.addImage("nature bg",bg2Img);
  bg2.scale = 0.3;
  bg2.visible = false;
  
  avatar1 = createSprite(100,100,100,100);
  avatar1.addImage("char1",char1Img);
  avatar1.scale = 0.5;
  avatar1.visible = false;
  
  avatar2 = createSprite(100,300,100,100);
  avatar2.addImage("char2",char2Img);
  avatar2.scale = 0.5;
  avatar2.visible = false;
  
  avatar3 = createSprite(500,100,100,100);
  avatar3.addImage("char3",char3Img);
  avatar3.scale = 0.5;
  avatar3.visible = false;
  
  avatar4 = createSprite(500,300,100,100);
  avatar4.addImage("char4",char4Img);
  avatar4.scale = 0.5;
  avatar4.visible = false;
  
  avatar5 = createSprite(300,200,100,100);
  avatar5.addImage("char5",char5Img);
  avatar5.scale = 0.5;
  avatar5.visible = false;
  
  mouse = createSprite(300,200,20,20);
  mouse.visible = false;
  
  playBtn = createSprite(300,180,100,50);
  playBtn.addImage("play",playBtnImg);
  
  instBtn = createSprite(300,260,100,50);
  instBtn.addImage("how to play",instBtnImg);
  
  customizeBtn = createSprite(300,340,100,50);
  customizeBtn.addImage("character",customizeBtnImg);
  
  
  
  level1Slide = createSprite(120,200,150,150);
  level1Slide.visible = false;
  level1Slide.addImage("l1",level1SlideImg);
  level1Slide.scale = 0.6;
  
  
  level2Slide = createSprite(450,200,150,150);
  level2Slide.visible = false
  level2Slide.addImage("l2",level2SlideImg);
  level2Slide.scale = 0.6;
  
  level3Slide = createSprite(780,200,150,150);
  level3Slide.visible = false;
  level3Slide.addImage("l3",level3SlideImg);
  level3Slide.scale = 0.6;
  
  level4Slide = createSprite(1110,200,150,150);
  level4Slide.visible = false;
  level4Slide.addImage("l3",level4SlideImg);
  level4Slide.scale = 0.6;
  
  level5Slide = createSprite(1440,200,150,150);
  level5Slide.visible = false;
  level5Slide.addImage("l3",level5SlideImg);
  level5Slide.scale = 0.6;
  
  levelBonus1 = createSprite(1770,200,150,150);
  //levelBonus1.visible = false;
  levelBonus1.addImage("l3",level5SlideImg);
  levelBonus1.scale = 0.6;  
  
  slider = createSlider(300,2000,300);
  slider.position(230,380);
  
  startBtn1 = createSprite(120,300,100,50);
  startBtn1.addImage("start",startBtnImg);
  
  startBtn2 = createSprite(450,300,100,50);
  startBtn2.addImage("start",startBtnImg);
  
  startBtn3 = createSprite(780,300,100,50);
  startBtn3.addImage("start",startBtnImg);
  
  startBtn4 = createSprite(1110,300,100,50);
  startBtn4.addImage("start",startBtnImg);
  startBtn4.scale = 0.6;
  
  startBtn5 = createSprite(1440,300,100,50);
  startBtn5.addImage("start",startBtnImg);
  startBtn5.scale = 0.6;
  
  msg1 = createSprite(300,200,50,100);
  msg1.addImage("msg1",msg1Img);
  msg1.scale = 0.85;
  msg1.visible = false;
  
  msg2 = createSprite(300,200,50,100);
  msg2.addImage("msg1",msg2Img);
  msg2.scale = 0.85;
  msg2.visible = false;
  
  msg3 = createSprite(300,200,50,100);
  msg3.addImage("msg1",msg3Img);
  msg3.scale = 0.85;
  msg3.visible = false;
  
  msg4 = createSprite(300,200,50,100);
  msg4.addImage("msg1",msg4Img);
  msg4.scale = 0.85;
  msg4.visible = false;
  
  msg5 = createSprite(300,200,50,100);
  msg5.addImage("msg1",msg5Img);
  msg5.scale = 0.85;
  msg5.visible = false;
  
  backBtn = createSprite(300,-300,50,20);
  backBtn.addImage("back",backBtnImg);
  backBtn.visible = false;
  
  wall1 = createSprite(100,-200,20,50);
  wall1.addImage("wall",wallImg);
  wall1.scale = 0.1;
  //wall1.debug = true;
  //wall1.setCollider("rectangle",-30,-20,5,2);

  wall2 = createSprite(100,-200,20,50);
  wall2.addImage("wall",wallImg);
  wall2.scale = 0.1;

  wall3 = createSprite(100,-200,20,50);
  wall3.addImage("wall",wallImg);
  wall3.scale = 0.15;

  wall4 = createSprite(100,-200,20,50);
  wall4.addImage("wall",wallImg);
  wall4.scale = 0.1;

  potion1 = createSprite(50,300,20,20);
  potion1.addImage("potion",potionImg);
  potion1.scale = 0.15;
  potion1.visible = false;
  
  potion2 = createSprite(350,300,20,20);
  potion2.addImage("potion",potionImg);
  potion2.scale = 0.15;
  potion2.visible = false;

  

  //Home button
  homeBtn = createSprite(500,30,100,50);
  homeBtn.addImage("home",homeBtnImg);
  homeBtn.scale = 0.7;

  
  
}

function draw(){
  
  background(0);
  
  mouse.x = mouseX;
  mouse.y = mouseY;
  

  //console.log(end1.y); 
  
  bot1.collide(wall1);

  bot1.collide(wall2);

  bot2.collide(wall3);
  

  //////////////////////menu////////////////////////////
  if(level === 0){
    bot1.visible = false;
    bot2.visible = false;
    area1.visible = false;
    area2.visible = false;
    end1.visible = false;
    end2.visible = false;
    level1Slide.visible = false;
    level2Slide.visible = false;
    level3Slide.visible = false;
    level4Slide.visible = false;
    level5Slide.visible = false;
    homeBtn.visible = false;
    startBtn1.visible = false;
    startBtn2.visible = false;
    potion1.visible = false;
    potion2.visible = false;

    player.visible = false;
  border1.visible = false;
  border1.visible = false;
  bg.visible = false;
  ground.visible = false;
  
    if(mousePressedOver(playBtn)){
    level = -2;
  }
    if(mousePressedOver(customizeBtn)){
      level = -1;
    }
  }
  
  
  
  
  //////////////////////////home button///////////////////////
  if(mousePressedOver(homeBtn)){
    level = 0;
    bg1.visible = true;
    avatar1.visible = false;
    avatar2.visible = false;
    avatar3.visible = false;
    avatar4.visible = false;
    avatar5.visible = false;
    playBtn.visible = true;
    instBtn.visible = true;
    customizeBtn.visible = true;
    backBtn.visible = false;
    backBtn.y = -300;
    msg1.visible = false;
    msg2.visible = false;
    msg3.visible = false;
    msg4.visible = false;
    msg5.visible = false;

    player.visible = false;
    border1.visible = false;
    border2.visible = false;
    bg.visible = false;
    ground.visible = false;
    enemyGroup.visible = false;


    wall2.y = -200;
    wall3.y = -200;
    winsound.stop();
    bgm2.stop();
  }
  
  
  ////////////////////////customization/////////////////////////
  if(level === -1){
    
    bg1.visible = false;
    bg2.visible = true;
    
    playBtn.visible = false;
    instBtn.visible = false;
    customizeBtn.visible = false;
    homeBtn.visible = true;
    homeBtn.x = 300;

    bg2.x = 300;
    
    avatar1.visible = true;
    avatar2.visible = true;
    avatar3.visible = true;
    avatar4.visible = true;
    avatar5.visible = true;
    
    customSelection();    
    
  }else{
     homeBtn.x = 500;
     bg2.visible = false;
  }
  
  
  ////////////////////level selection////////////////////////
  if(level === -2){
    
    bg1.visible = false;
    bg2.visible = true;
    bg3.visible = false;
    potion1.visible = false;
    potion2.visible = false;
    potion1.x = 50;
    potion1.y = 300;
    
    potion2.x = 350;
    potion2.y = 300;
    
    playBtn.visible = false;
    instBtn.visible = false;
    customizeBtn.visible = false;
    homeBtn.visible = true;
    
    level1Slide.visible = true;
    level2Slide.visible = true;
    level3Slide.visible = true;
    level4Slide.visible = true;
    level5Slide.visible = true;
    
    
    startBtn1.visible = true;
    startBtn2.visible = true;
    startBtn3.visible = true;
    startBtn4.visible = true;
    startBtn5.visible = true;
    
    backBtn.visible = false;
    msg1.visible = false;
    msg2.visible = false;
    msg3.visible = false;
    msg4.visible = false;
    msg5.visible = false;
    
    camera.position.x = slider.value();
    homeBtn.x = slider.value() + 200;
    bg2.x = slider.value();
    

    /////////////initializing level=1//////////////
    if(mousePressedOver(startBtn1)){
      level = 1;
      bot1.x = 150;
      bot1.y = 200;
      bot2.x = 450;
      bot2.y = 200;
      bgm2.play();
    } 
    
    //////////initializing level=2////////////
    if(mousePressedOver(startBtn2)){
      level = 2;
      bot1.x = 150;
      bot1.y = 200;
      bot2.x = 450;
      bot2.y = 200;
      bgm2.play();
    }
    
    //////////initializing level=3////////////
    if(mousePressedOver(startBtn3)){
      level = 3;
      bot1.x = 150;
      bot1.y = 200;
      bot2.x = 450;
      bot2.y = 200;
      bgm2.play();
    }
    
    //////////initializing level=4////////////
    if(mousePressedOver(startBtn4)){
      level = 4;
      bot1.x = 250;
      bot1.y = 300;
      bot2.x = 550;
      bot2.y = 300;
      bgm2.play();
    }
    
    //////////initializing level=5////////////
    if(mousePressedOver(startBtn5)){
      level = 5;
      bot1.x = 100;
      bot1.y = 300;
      bot2.x = 450;
      bot2.y = 300;
      bgm2.play();
    }
    
    ///////initializing infinity runner 1////////
    if(mousePressedOver(levelBonus1)){
      level = 6;
      score = 0;
    }
    
  }else{
    camera.position.x = bg1.x;
  }
   
  
  
  /////////////////////back button////////////////////
  if(mousePressedOver(backBtn)){
    level = -2;
    winsound.stop();
    bgm2.stop();
  }
  
  
  ////////////////////////level = 1//////////////////////
  if(level === 1){
    wall1.x = 100;
    initialLevel();
    end1.x = 180;
    end2.x = 480;
    bot1.scale = 0.26;
    bot2.scale = 0.26;
    
    if(bot1.isTouching(end1) && bot2.isTouching(end2)){
     level = endMsg1;
     end1.y = -80;
     end2.y = -80;
     winsound.play();
     msg1.visible = true;
     backBtn.visible = true;
     backBtn.y = 350;
      
  }else{
    backBtn.y = -300;
  }   
  }
  
  
  
  
    
  
  ///////////////////////level-1 completed/////////////////////
  if(level === endMsg1){
    bgm.stop();
    bgm2.stop();
    bg3.visible = true;
  }
  
  
  
  ////////////////////////level = 2/////////////////////////////
  if(level === 2){
    wall1.y = 200;
    end1.x = 180;
    end2.x = 570;
    initialLevel();
    bot1.scale = 0.26;
    bot2.scale = 0.26;
    
    if(bot1.isTouching(end1) && bot2.isTouching(end2)){
     level = endMsg2;
     end1.y = -80;
     end2.y = -80;
     winsound.play();
     msg2.visible = true;
     backBtn.visible = true;
     backBtn.y = 350;
  }else{
    backBtn.y = -300;
  } 
    
  }else{
    wall1.y = -200;
  }
  
  
  
  /////////////////////////level = 3/////////////////////////
  if(level === 3){
    //end1.debug = true;
    end1.setCollider("rectangle",-30,-30,5,2);
    //end2.debug = true;
    end2.setCollider("rectangle",-30,-30,5,2);
    
    wall1.y = 200;
    potion1.visible = true;
    potion2.visible = true;
    end1.x = 180;
    end2.x = 570;
    bot1.scale = 0.1;
    bot2.scale = 0.1;

   initialLevel();
    
    if(bot1.isTouching(potion1) && bot2.isTouching(potion2)){
     bot1.scale = 0.26;
     bot2.scale = 0.26;
      potion1.visible = false;
      potion2.visible = false;
      end1.setCollider("rectangle",-30,-20,5,2);
      end2.setCollider("rectangle",-30,-20,5,2);
      potion1.x = bot1.x;
      potion1.y = bot1.y;
      potion2.x = bot2.x;
      potion2.y = bot2.y;
  }
    
    if(bot1.isTouching(end1) && bot2.isTouching(end2)){
     level = endMsg3;
     end1.y = -80;
     end2.y = -80;
     winsound.play();
     msg3.visible = true;
     backBtn.visible = true;
     backBtn.y = 350;
  }else{
    backBtn.y = -300;
  } 
    
  }
  
  
  ////////////////////////level = 4//////////////////////////
  if(level === 4){
    wall1.x = 150;
    wall1.y = 200;
    wall2.x = 200;
    wall2.y = 200;

    wall3.x = 380;
    wall3.y = 200;
    end2.x = 480;
    end2.y = 110;
    end1.x = 150;
    bot1.scale = 0.26;
    bot2.scale = 0.26;

    initialLevel();
    
    if(bot1.isTouching(end1) && bot2.isTouching(end2)){
     level = endMsg4;
     end1.y = -80;
     end2.y = -80;
     winsound.play();
     msg3.visible = true;
     backBtn.visible = true;
     backBtn.y = 350;
     wall2.y = -300;
     wall3.y = -300;
  }else{
    backBtn.y = -300;
    
  } 
    
  }
  
  
  /////////////////////////level = 5/////////////////////////
  if(level === 5){

    initialLevel();
    wall1.x = 120;
    wall1.y = 200;
    bot1.scale = 0.26;
    bot2.scale = 0.26;
    end1.x = 100;
    end2.x = 570
    
    if(bot1.isTouching(end1) && bot2.isTouching(end2)){
     level = endMsg5;
     end1.y = -80;
     end2.y = -80;
     winsound.play();
     msg5.visible = true;
     backBtn.visible = true;
     backBtn.y = 350;
  }else{
    backBtn.y = -300;
  } 
  }
  
  ////////////////////infinityGame1/////////////////////////
  if(level === 6){
    area1.visible = false;
    area2.visible = false;
    end1.visible = false;
    end2.visible = false;
    bot1.visible = false;
    bot2.visible = false;
    player.visible = true;
    border1.visible = true;
    border2.visible = true;
    ground.visible = true;
    bg.visible = true;
    homeBtn.visible = true;

    level1Slide.visible = false;
    level2Slide.visible = false;
    level3Slide.visible = false;
    level4Slide.visible = false;
    level5Slide.visible = false;
    startBtn1.visible = false;
    startBtn2.visible = false;

  border1.y = player.y;
  border2.y = player.y;
  
  player.collide(finish);

  if(player.y <= 0){
   camera.position.y = player.y-100;
  }else{
    camera.position.y = ground.y-200;
  }
  
  
  if(player.y >= 400){
    player.y = 350;
  }
  
  player.velocityY = player.velocityY+2;
  
  
  if(keyDown("right")){
    player.velocityX = 20;
  }else{
    player.velocityX = 0;
  }
 
  if(keyDown("left")){
    player.velocityX = -20;
  }
  
  if(player.isTouching(border1)){
     player.velocityY = 2;
     player.velocityX = 0;
    
    if(keyDown("right")){
    player.velocityX = 20;
      if(keyDown("up")){
    player.velocityY = -30;
  }
  }
  }
  
  
  if(player.isTouching(border2)){
     player.velocityY = 2;
     player.velocityX = 0;
    
    if(keyDown("left")){
    player.velocityX = -20;
      if(keyDown("up")){
    player.velocityY = -30;
  }
  }
  }
  
  if(enemyGroup.isTouching(ground)){
    score+=1;
  }
  
  if(player.isTouching(ground)){
    player.velocityY = 0;
    if(keyDown("up")){
    player.velocityY = -20;
  }
  }
  
  if(player.y <= -150){
    bg.y = -550;
  }else{
    bg.y = -220;
  }
  

  if(enemyGroup.isTouching(player)){
    player.y = 350;
  }

  
  if(player.y < -1250){
    Yposition = 1000;

    textSize(25);
    fill("pink");
    stroke("black");
    strokeWeight(5);
    text("Rank :"+score,250,player.y - 230);
    
  }else{
    obstacle();
    Yposition = -1500;
  }
    
}
  
  
  
  movement();
  
  collision();
  
  interaction();
  
  drawSprites();
  
  fill("red");
  text(""+mouseX+","+mouseY,20,20);

  
  
}

function movement(){
  
  
  if(keyDown("up")){
    bot1.velocityY = -5;
    bot2.velocityY = -5;
  }else{
    bot1.velocityY = 0;
    bot2.velocityY = 0;
  }
  
  if(keyDown("down")){
    bot1.velocityY = 5;
    bot2.velocityY = 5;
  }
  
  if(keyDown("right")){
    bot1.velocityX = 5;
    bot2.velocityX = 5;
  }else{
    bot1.velocityX = 0;
    bot2.velocityX = 0;
  }
  
  if(keyDown("left")){
    bot1.velocityX = -5;
    bot2.velocityX = -5;
  }
  
  
  
}
  

function collision(){
  
  
  //Collisions for Bot1
  if(bot1.x <= 50){
    bot1.velocityX = 0;
    if(keyDown("right")){
      bot1.velocityX = 5;
    }
  } 
  
  if(bot1.x >= 250){
    bot1.velocityX = 0;
    if(keyDown("left")){
      bot1.velocityX = -5;
    }
  }
  
  if(bot1.y <= 100){
    bot1.velocityY = 0;
    if(keyDown("down")){
      bot1.velocityY = 5;
    }
  }
  
  if(bot1.y >= 300){
    bot1.velocityY = 0;
    if(keyDown("up")){
      bot1.velocityY = -5;
    }
  }
  
  
  
  //Collisions for Bot2
  if(bot2.x <= 350){
    bot2.velocityX = 0;
    if(keyDown("right")){
      bot2.velocityX = 5;
    }
  } 
  
  if(bot2.x >= 550){
    bot2.velocityX = 0;
    if(keyDown("left")){
      bot2.velocityX = -5;
    }
  }
  
  if(bot2.y <= 100){
    bot2.velocityY = 0;
    if(keyDown("down")){
      bot2.velocityY = 5;
    }
  }
  
  if(bot2.y >= 300){
    bot2.velocityY = 0;
    if(keyDown("up")){
      bot2.velocityY = -5;
    }
  }

  
  
  if(bot1.velocityX === 0){
    bot2.velocityX = 0;
  }
  
  if(bot2.velocityX === 0){
    bot1.velocityX = 0;
  }
  
  if(bot1.velocityY === 0){
    bot2.velocityY = 0;
  }
  
  if(bot2.velocityY === 0){
    bot1.velocityY = 0;
  }
  
  
  
  if(bot2.isTouching(br7)){
    bot1.velocityX = 0;
    bot2.velocityX = 0;
    if(keyDown("right")){
      bot1.velocityX = 5;
      bot2.velocityX = 5;
    }
  }
  
  
}


function interaction(){
  
  
  if(mouse.isTouching(playBtn)){
    playBtn.scale = 0.6;
  }else{
    playBtn.scale = 0.7;
  }
  
  
  if(mouse.isTouching(instBtn)){
    instBtn.scale = 0.6;
  }else{
    instBtn.scale = 0.7;
  }
  
  if(mouse.isTouching(customizeBtn)){
    customizeBtn.scale = 0.6;
  }else{
    customizeBtn.scale = 0.7;
  }
  
  if(mouse.isTouching(homeBtn)){
    homeBtn.scale = 0.5;
  }else{
    homeBtn.scale = 0.6;
  }
  
  if(mouse.isTouching(startBtn1)){
    startBtn1.scale = 0.5;
  }else{
    startBtn1.scale = 0.6;
  }
  
  if(mouse.isTouching(startBtn2)){
    startBtn2.scale = 0.5;
  }else{
    startBtn2.scale = 0.6;
  }
  
  if(mouse.isTouching(startBtn3)){
    startBtn3.scale = 0.5;
  }else{
    startBtn3.scale = 0.6;
  }
  
  
  if(mouse.isTouching(backBtn)){
    backBtn.scale = 0.5;
  }else{
    backBtn.scale = 0.6;
  }
  
  
  
}


function customSelection(){
  
  
  if(mousePressedOver(avatar1)){
    avatar1.scale = 0.8;
    avatar2.scale = 0.5;
    avatar3.scale = 0.5;
    avatar4.scale = 0.5;
    avatar5.scale = 0.5;
    bot1.addImage("bot1",char1Img);
    
  }
  
  if(mousePressedOver(avatar2)){
    
    avatar2.scale = 0.8;
    avatar1.scale = 0.5;
    avatar3.scale = 0.5;
    avatar4.scale = 0.5;
    avatar5.scale = 0.5;
    bot1.addImage("bot1",char2Img);
    
  }
  
  if(mousePressedOver(avatar3)){
    
    avatar3.scale = 0.8;
    avatar1.scale = 0.5;
    avatar2.scale = 0.5;
    avatar4.scale = 0.5;
    avatar5.scale = 0.5;
    bot1.addImage("bot1",char3Img);
    
  }
  
  if(mousePressedOver(avatar4)){
    
    avatar4.scale = 0.8;
    avatar1.scale = 0.5;
    avatar3.scale = 0.5;
    avatar2.scale = 0.5;
    avatar5.scale = 0.5;
    bot1.addImage("bot1",char4Img);
    
  }
  
  if(mousePressedOver(avatar5)){
    
    avatar5.scale = 0.8;
    avatar1.scale = 0.5;
    avatar3.scale = 0.5;
    avatar4.scale = 0.5;
    avatar2.scale = 0.5;
    bot1.addImage("bot1",char5Img);
  }
  
  
}


function initialLevel(){
  bot1.visible = true;
  bot2.visible = true;
  area1.visible = true;
  area2.visible = true;
  end1.visible = true;
  end1.y = 110;
  end2.visible = true;
  end2.y = 110;
  bg1.visible = false;
  playBtn.visible = false;
  instBtn.visible = false;
  customizeBtn.visible = false;
  level1Slide.visible = false;
  level2Slide.visible = false;
  level3Slide.visible = false;
  level4Slide.visible = false;
  level5Slide.visible = false;
  startBtn1.visible = false;
  startBtn2.visible = false;
  bgm.stop();
  bg3.visible = true;
  player.visible = false;
  border1.visible = false;
  border1.visible = false;
  bg.visible = false;
  ground.visible = false;
}


function obstacle(){
  
  if(frameCount % 40 === 0){
    enemy = createSprite(player.x,Yposition,50,20);
    enemy.addImage("enemy",enemyImg);
    enemy.scale = 0.2;
    enemy.velocityY = 20 -score/10
    enemyGroup.add(enemy);
    enemy.lifetime = 400;
  }    
}