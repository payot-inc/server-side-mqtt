import MQTT from 'mqtt';

export default class ServerSideMqtt {
  constructor(host, port) {
    this.host = this.host;
    this.port = this.port;
    this.client = MQTT.connect(`mqtt://${host}:${port}`);
  }

  test() {
    console.log(this.host, this.port);
  }
}
