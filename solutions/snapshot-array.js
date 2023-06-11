class SnapshotArray {
  constructor(length) {
    this.arr = {};
    this.snaps = {};
    this.snapId = 0;
    this.hasBeenChanged = false;
  }
}

SnapshotArray.prototype.set = function (index, val) {
  this.arr[index] = val;
  this.hasBeenChanged = true;
};

SnapshotArray.prototype.snap = function () {
  this.snaps[this.snapId] = this.hasBeenChanged
    ? { ...this.arr }
    : this.snaps[this.snapId - 1];
  this.snapId++;
  this.hasBeenChanged = false;
  return this.snapId - 1;
};

SnapshotArray.prototype.get = function (index, snap_id) {
  if (!this.snaps[snap_id]) return null;
  return this.snaps[snap_id][index] || 0;
};
