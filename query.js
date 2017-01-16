function query() {
  return new Query();
}

function Query() {
  this.hasFrom = false;
  this.selected = false;

  this.source = [];

  this.selectedField = defaultSelectedField;
  this.whereClause = defaultWhere;
}

Query.prototype.select = function(selectedField) {
  this.selected = true;
  this.selectedField = selectedField || defaultSelectedField;
  return this;
}

Query.prototype.from = function(source) {
  this.hasFrom = true;
  this.source = source;
  return this;
}

Query.prototype.where = function(whereClause) {
  this.whereClause = whereClause || defaultWhere;
  return this;
}

Query.prototype.groupBy = function(groupBy) {
  this.groupBy = groupBy || defaultGroupBy;
  return this;
}

Query.prototype.execute = function() {
  return this.source.filter(this.whereClause).map(this.selectedField);
}

function defaultSelectedField(element) {
  return element;
}

function defaultWhere() {
  return true;
}

module.exports = query;
