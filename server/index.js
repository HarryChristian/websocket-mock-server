const Websocket = require("ws");


const wss = new Websocket.Server({port:5050});
data = {
  "samppraw_event": {
    "sessionEvent": {
      "psn": "",
      "uuid": "98fc9dd2-e740-4ded-a393-3cefedc55802",
      "start_time": "2022-05-06T08:10:07.715Z",
      "end_time": "",
      "overall_status": "",
      "network_id": 81,
      "site_id": 829,
      "device_id": 1471,
      "shelf_id": 249,
      "system_compliance": {
        "status": "passed",
        "events": [
          {
            "app_code": "sampp",
            "ar_id": 3109,
            "cam_id": "",
            "camera_name": "",
            "confidence": "99.1",
            "error_level": "",
            "event_code": "sampp_0007",
            "event_description": "",
            "event_name": "Ghost Label",
            "event_status": "passed",
            "event_type": "",
            "eventtype_code": "",
            "facing_id": "",
            "feeder_id": "",
            "feeder_name": "",
            "is_criticalevent": "",
            "is_manifested": "",
            "product_id": "",
            "qty": 0,
            "scene_id": 2714,
            "section_id": "1014",
            "timestamp": "2022-05-06T08:10:27.034Z"
          }
        ]
      },
      "planogram_compliance": {"status": "", "events": [  {
        "app_code": "sampp",
        "ar_id": 3109,
        "cam_id": "",
        "camera_name": "",
        "confidence": "99.1",
        "error_level": "",
        "event_code": "sampp_0033",
        "event_description": "",
        "event_name": "Failure to Apply Label",
        "event_status": "passed",
        "event_type": "",
        "eventtype_code": "",
        "facing_id": "",
        "feeder_id": "",
        "feeder_name": "",
        "is_criticalevent": "",
        "is_manifested": "",
        "product_id": "",
        "qty": 0,
        "scene_id": 2714,
        "section_id": "1014",
        "timestamp": "2022-05-06T08:10:27.034Z"
      }]},
      "order_compliance": {"status": "", "events": []},
      "pick_req": [],
      "product_picked": [],
      "media": [],
      "start_t": 1651824607.7156985,
      "thumbsent": true,
      "raw_event_type": "system_compliance"
    },
    "cam_id": 5795
  }
}
wss.on("connection", wss => {

  console.log("connected on port 5050");
  setInterval(() => {
    wss.send(JSON.stringify(data))
  }, 1);

});

wss.on("error", (err) => {
  console.log(err)
});