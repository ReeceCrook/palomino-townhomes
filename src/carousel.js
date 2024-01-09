
import img1 from './assets/CarouselImages/seven.jpg'
import img2 from './assets/CarouselImages/eleven.jpg'
import img3 from './assets//CarouselImages/22-web-or-mls-DSC04703_final.jpg'
import img4 from './assets/CarouselImages/UNADJUSTEDNONRAW_thumb_367c.jpg'
import img5 from './assets/CarouselImages/UNADJUSTEDNONRAW_thumb_3680.jpg'

import lef1 from './assets/FloorPlans/Model-1551/Left/Screenshot 2023-12-01 165618.png'
import left2 from './assets/FloorPlans/Model-1551/Left/Screenshot 2023-11-22 155348.png'
import left3 from './assets/FloorPlans/Model-1551/Left/Screenshot 2023-11-22 155412.png'
import left4 from './assets/FloorPlans/Model-1558/left/Screenshot 2023-11-22 155615.png'
import left5 from './assets/FloorPlans/Model-1558/left/Screenshot 2023-11-22 155633.png'
import left6 from './assets/FloorPlans/Model-1558/left/Screenshot 2023-11-22 155653.png'
import exteriorLeft from './assets/FloorPlans/Model-1551/Model-1551-exterior.png'

import right1 from './assets/FloorPlans/Model-1551/right/Screenshot 2023-11-22 155332.png'
import right2 from './assets/FloorPlans/Model-1551/right/Screenshot 2023-11-22 155401.png'
import right3 from './assets/FloorPlans/Model-1551/right/Screenshot 2023-11-22 155419.png'
import right4 from './assets/FloorPlans/Model-1558/right/Screenshot 2023-11-22 155627.png'
import right5 from './assets/FloorPlans/Model-1558/right/Screenshot 2023-11-22 155643.png'
import right6 from './assets/FloorPlans/Model-1558/right/Screenshot 2023-11-22 155702.png'
import exteriorRight from './assets/FloorPlans/Model-1558/Model-1558-exterior.png'



const homeImages = [
    {
        'id': 1,
        'original': img1,
        "thumbnail": img1,
        'des': 'In living room looking towords kitchen'
    },
    {
        'id': 2,
        'original': img2,
        "thumbnail": img2,
        'des': 'In kitchen'
    },
    {
        'id': 3,
        'original': img3,
        "thumbnail": img3,
        'des': 'Bedroom'
    },
    {
        'id': 4,
        'original': img4,
        "thumbnail": img4,
        'des': 'In living room looking twords kitchen (house 2)'
    },
    {
        'id': 5,
        'original': img5,
        "thumbnail": img5,
        'des': 'In living room looking twords kitchen (house 3)'
    }
]

const floorPlanImages = [

    [
        {
            'id': 13,
            'original': exteriorLeft,
            "thumbnail": exteriorLeft,
            "left": true,
            'model': 1551
        },
        {
            'id': 1,
            'original': lef1,
            "thumbnail": lef1,
            "left": true,
            'model': 1551,
        },
        {
            'id': 2,
            'original': left2,
            "thumbnail": left2,
            "left": true,
            'model': 1551,
        },
        {
            'id': 3,
            'original': left3,
            "thumbnail": left3,
            "left": true,
            'model': 1551,
        },
    ],
    [
        {
            'id': 4,
            'original': right1,
            "thumbnail": right1,
            "left": false,
            'model': 1551,
        },
        {
            'id': 5,
            'original': right2,
            "thumbnail": right2,
            "left": false,
            'model': 1551,
        },
        {
            'id': 6,
            'original': right3,
            "thumbnail": right3,
            "left": false,
            'model': 1551,
        },
    ],
    [
        {
            'id': 7,
            'original': left4,
            "thumbnail": left4,
            "left": true,
            'model': 1558,
        },
        {
            'id': 8,
            'original': left5,
            "thumbnail": left5,
            "left": true,
            'model': 1558,
        },
        {
            'id': 9,
            'original': left6,
            "thumbnail": left6,
            "left": true,
            'model': 1558,
        },
    ],
    [
        {
            'id': 10,
            'original': right4,
            "thumbnail": right4,
            "left": false,
            'model': 1558,
        },
        {
            'id': 11,
            'original': right5,
            "thumbnail": right5,
            "left": false,
            'model': 1558,
        },
        {
            'id': 12,
            'original': right6,
            "thumbnail": right6,
            "left": false,
            'model': 1558,
        },

        {
            'id': 14,
            'original': exteriorRight,
            "thumbnail": exteriorRight,
            "left": false,
            'model': 1558
        }
    ]
]



export { homeImages, floorPlanImages }