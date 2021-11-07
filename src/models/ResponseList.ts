export class ResponseList {
  count: string
  items: any
  constructor(listJson: ResponseList) {
    this.count = listJson.count
    this.items = listJson.items
  }
}
