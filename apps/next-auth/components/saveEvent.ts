import axios from 'axios';
const saveEvent = (action: string, crud: string, group: string, displayTitle: string, actor: string,
    target: string, source_ip: string, description: string, component: string, meta?: any) => {
    axios.post(`/api/auditLogs/save`, {
        "action": action,
        "crud": crud,
        "group": {
            "id": "string",
            "name": group
        },
        "displayTitle": displayTitle,
        "created": "2022-03-21T07:17:54",
        "actor": {
            "id": "string",
            "name": actor,
            "href": "string"
        },
        "target": {
            "id": "string",
            "name": target,
            "href": "target2",
            "type": "target1"
        },
        "source_ip": source_ip,
        "description": description,
        "is_anonymous": true,
        "is_failure": false,
        "fields": meta || {},
        "component": component,
        "version": "v1"
    }).then(res => {})
}
export default saveEvent;