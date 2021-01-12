import MQTT from 'mqtt';

export default class ServerSideMqtt {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.client = MQTT.connect(`mqtt://${host}:${port}`);
  }

  test() {
    console.log(this.host, this.port);
  }
}