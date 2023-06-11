class SnapshotArray {
  constructor(_length) {
    this.arr = {};
    this.snaps = {};
    this.snapId = 0;
    this.hasBeenChanged = false;
  }

  set = function (index, val) {
    this.arr[index] = val;
    this.hasBeenChanged = true;
  };

  snap = function () {
    this.snaps[this.snapId] = this.hasBeenChanged
      ? { ...this.arr }
      : this.snaps[this.snapId - 1];
    this.hasBeenChanged = false;
    return this.snapId++;
  };

  get = function (index, snap_id) {
    if (!this.snaps[snap_id]) return null;
    return this.snaps[snap_id][index] || 0;
  };
}
