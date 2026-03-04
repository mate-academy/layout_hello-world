'use strict';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const TILE_SIZE = 24;
const WORLD_W = 200;
const WORLD_H = 90;

const world = Array.from({ length: WORLD_H }, () => Array(WORLD_W).fill(0));

const tiles = {
  air: 0,
  grass: 1,
  dirt: 2,
  stone: 3,
};

function createWorld() {
  let height = 40;

  for (let x = 0; x < WORLD_W; x++) {
    height += Math.floor(Math.random() * 3) - 1;
    height = Math.max(25, Math.min(55, height));

    for (let y = 0; y < WORLD_H; y++) {
      if (y < height) {
        world[y][x] = tiles.air;
      } else if (y === height) {
        world[y][x] = tiles.grass;
      } else if (y < height + 6) {
        world[y][x] = tiles.dirt;
      } else {
        world[y][x] = tiles.stone;
      }
    }
  }
}

createWorld();

const player = {
  x: 240,
  y: 120,
  w: 18,
  h: 34,
  vx: 0,
  vy: 0,
  speed: 170,
  jump: 360,
  onGround: false,
};

const camera = { x: 0, y: 0 };
const keys = new Set();
const mouse = { x: 0, y: 0 };

const GRAVITY = 900;

function getTile(tx, ty) {
  if (tx < 0 || ty < 0 || tx >= WORLD_W || ty >= WORLD_H) {
    return tiles.air;
  }

  return world[ty][tx];
}

function setTile(tx, ty, value) {
  if (tx < 0 || ty < 0 || tx >= WORLD_W || ty >= WORLD_H) {
    return;
  }

  world[ty][tx] = value;
}

function isSolid(v) {
  return v !== tiles.air;
}

function rectIntersectsSolid(x, y, w, h) {
  const minX = Math.floor(x / TILE_SIZE);
  const maxX = Math.floor((x + w - 1) / TILE_SIZE);
  const minY = Math.floor(y / TILE_SIZE);
  const maxY = Math.floor((y + h - 1) / TILE_SIZE);

  for (let ty = minY; ty <= maxY; ty++) {
    for (let tx = minX; tx <= maxX; tx++) {
      if (isSolid(getTile(tx, ty))) {
        return true;
      }
    }
  }

  return false;
}

function update(dt) {
  player.vx = 0;

  if (keys.has('KeyA')) {
    player.vx = -player.speed;
  }

  if (keys.has('KeyD')) {
    player.vx = player.speed;
  }

  if ((keys.has('KeyW') || keys.has('Space')) && player.onGround) {
    player.vy = -player.jump;
    player.onGround = false;
  }

  player.vy += GRAVITY * dt;

  const nextX = player.x + player.vx * dt;

  if (!rectIntersectsSolid(nextX, player.y, player.w, player.h)) {
    player.x = nextX;
  }

  const nextY = player.y + player.vy * dt;

  if (!rectIntersectsSolid(player.x, nextY, player.w, player.h)) {
    player.y = nextY;
    player.onGround = false;
  } else {
    if (player.vy > 0) {
      player.onGround = true;
    }

    player.vy = 0;
  }

  camera.x = player.x - canvas.width / 2;
  camera.y = player.y - canvas.height / 2;

  camera.x = Math.max(0, Math.min(WORLD_W * TILE_SIZE - canvas.width, camera.x));
  camera.y = Math.max(0, Math.min(WORLD_H * TILE_SIZE - canvas.height, camera.y));
}

function tileColor(v) {
  if (v === tiles.grass) {
    return '#3ca43c';
  }

  if (v === tiles.dirt) {
    return '#7d4b2a';
  }

  if (v === tiles.stone) {
    return '#68707d';
  }

  return null;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const startX = Math.floor(camera.x / TILE_SIZE);
  const startY = Math.floor(camera.y / TILE_SIZE);
  const endX = startX + Math.ceil(canvas.width / TILE_SIZE) + 1;
  const endY = startY + Math.ceil(canvas.height / TILE_SIZE) + 1;

  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      const v = getTile(x, y);
      const color = tileColor(v);

      if (!color) {
        continue;
      }

      ctx.fillStyle = color;
      ctx.fillRect(
        x * TILE_SIZE - camera.x,
        y * TILE_SIZE - camera.y,
        TILE_SIZE,
        TILE_SIZE,
      );
    }
  }

  ctx.fillStyle = '#f25f4c';
  ctx.fillRect(player.x - camera.x, player.y - camera.y, player.w, player.h);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.fillText('Block in hand: dirt', 16, 24);
}

canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
});

canvas.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

canvas.addEventListener('mousedown', (event) => {
  const worldX = Math.floor((mouse.x + camera.x) / TILE_SIZE);
  const worldY = Math.floor((mouse.y + camera.y) / TILE_SIZE);

  if (event.button === 0) {
    setTile(worldX, worldY, tiles.air);
  }

  if (event.button === 2) {
    if (!rectIntersectsSolid(worldX * TILE_SIZE, worldY * TILE_SIZE, TILE_SIZE, TILE_SIZE)) {
      setTile(worldX, worldY, tiles.dirt);
    }
  }
});

window.addEventListener('keydown', (event) => {
  keys.add(event.code);
});

window.addEventListener('keyup', (event) => {
  keys.delete(event.code);
});

let lastTime = performance.now();

function loop(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.033);
  lastTime = now;

  update(dt);
  draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
