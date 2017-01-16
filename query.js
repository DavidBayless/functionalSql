function query() {
  return new Query();
}

function Query() {
  this.hasFrom = false;
  this.selected = false;

  this.source = [];

  this.groupBy = defaultGroupBy;
}

Query.prototype.select = function(groupBy) {
  this.selected = true;
  this.groupBy = groupBy || defaultGroupBy;
  return this;
}

Query.prototype.from = function(source) {
  this.hasFrom = true;
  this.source = source;
  return this;
}

Query.prototype.execute = function() {
  return this.source.map(this.groupBy);
}

Query.prototype.where = function() {
  return this;
}

function defaultGroupBy(element) {
  return element;
}
