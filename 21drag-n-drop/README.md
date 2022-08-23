# Day 21 Points

## Know drag & drop Event

+ Event description

| Drag Source | Drop Target | Description |
| :------: | :---: | :--- |
| dragstart | | drag event start |
| | dragover | this event will be triggered when the source over the target |
| | dragenter | this event will be triggered when the source enter the target area |
| | dragleave | this event will betriggered when the source leave the target area |
| | drop | this event will be triggered when the source is be dropped to the target |
| dragend| | this event will betrigger when drag event end |

+ In dragover event, you need to add ``event.preventDefault()``, then you can drop the source to the target.
+ You can control the source & target style in dragenter、dragleave event.
