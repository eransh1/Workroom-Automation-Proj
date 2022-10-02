import TextIcon from "../images/TextIcon"
import CheckListIcon from "../images/CheckListIcon"
import SelectDateAndTimeIcon from "../images/SelectDateAndTimeIcon"
import UploadImageIcon from "../images/UploadImageIcon"
import SectionIcon from "../images/SectionIcon"

const fieldInput =[
    {id:1,
    icon:"",
    text:"Basic Fields",
    className:"field-input-heading"
    },
    {id:2,
        icon:<TextIcon />,
        text:"Text",
        className:"field-input-item",
        style:{opacity:"0.4"},
        
        },
        {id:3,
            icon:"",
            text:"Selection Fields",
            className:"field-input-heading"
            },
            {id:4,
                icon:<CheckListIcon/>,
                text:"Checklist",
                className:"field-input-item",
                style:{opacity:"0.4"},
                
                },
                {id:5,
                    icon:<SelectDateAndTimeIcon/>,
                    text:"Select Date & Time",
                    className:"field-input-item",
                    style:{opacity:"0.4"},
                   
                    },
                    {id:6,
                        icon:"",
                        text:"Attachment Fields",
                        className:"field-input-heading"
                        },
                        {id:7,
                            icon:<UploadImageIcon />,
                            text:"Upload Image",
                            className:"field-input-item",
                            style:{opacity:"0.4"},
                            
                            },
                            {id:8,
                                icon:"",
                                text:"Layout",
                                className:"field-input-heading"
                                },
                                {id:9,
                                    icon:<SectionIcon />,
                                    text:"Section",
                                    className:"field-input-item",
                                    style:{opacity:"0.4"},
                            
                                    }
]

export default fieldInput