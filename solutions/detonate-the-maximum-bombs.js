var maximumDetonation = function (bombs) {
  const hash = {};

  for (let i = 0; i < bombs.length; i++) {
    for (let j = 0; j < bombs.length; j++) {
      if (i != j && explosionCollides(bombs[i], bombs[j])) {
        if (!hash[i]) hash[i] = [];
        hash[i].push(j);
      }
    }
  }

  let maxCollisions = 0;
  for (let i = 0; i < bombs.length; i++) {
    const collisions = countCollisions(hash, i, {});
    if (collisions > maxCollisions) maxCollisions = collisions;
  }

  return maxCollisions;
};

var countCollisions = function (hash, index, exploded) {
  exploded[index] = true;

  if (!hash[index]) return 1;

  let sum = 1;
  for (let i = 0; i < hash[index].length; i++) {
    if (!exploded[hash[index][i]])
      sum += countCollisions(hash, hash[index][i], exploded);
  }

  return sum;
};

var explosionCollides = function (bomb1, bomb2) {
  const [Cx, Cy, radius] = bomb1;
  const [Px, Py] = bomb2;
  const distance = Math.sqrt((Px - Cx) * (Px - Cx) + (Py - Cy) * (Py - Cy));
  return radius >= distance;
};
