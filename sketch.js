let particles = [];
let numParticles = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  for(let i = 0; i < numParticles; i++){
      
      //myname
      particles.push(new particle(width/2, height/2));
  }
  
  

}

function draw() {
  background(220);
  
  for (let i = 0; i <numParticles; i++)
    {
      particles[i].display(random(2,8));
      particles[i].update(random(1,2));
      particles[i].keepInCanvas();
    }
  
  
  
}