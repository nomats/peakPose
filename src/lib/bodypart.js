class Bodypart{
  constructor(posenetKeypointObject){
    this.source = posenetKeypointObject
    this.position = this.source['position']
  }
}

module.exports = Bodypart
