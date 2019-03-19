class Bodypart{
  constructor(posenetBodypartObject){
    this.source = posenetBodypartObject
    this.position = this.source['position']
  }
}

module.exports = Bodypart
