export interface PayunitData {
    userId:number,
    name:string,
    LastName: string,
    paymentMethod: any,
    status:any,
    amount: any
}

const pictures = [
      'https://www.wilsoncenter.org/sites/default/files/styles/square/public/media/images/event/starr1.jpg',
      'https://www.zippia.com/wp-content/uploads/2020/05/ciera.jpg',
      'https://i1.feedspot.com/200/4862970.jpg?t=1612001204',
      'https://post.healthline.com/wp-content/uploads/sites/3/2020/01/Lori-Smith_circle.jpg',
      'https://www.cuisinenoirmag.com/wp-content/uploads/wordpress-popular-posts/24003-featured-200x200.jpg?x77184',
      'https://i1.feedspot.com/200/4862812.jpg?t=1612001263',
      'https://themighty.com/wp-content/uploads/2021/02/etty-fidele-5S4I0Y8ngY-unsplash-200x200.jpg?v=1613729097',
      'https://blog.ted.com/wp-content/uploads/sites/2/2021/03/Rumaitha_Al_Busaidi_2021_Fellow-1-e1617050993433.jpg',
      'https://jbhe-bruconpublishing.netdna-ssl.com//wordpress/wp-content/uploads/2013/10/Shaun-Harper-thumb.jpg',
      'https://dazedimg-dazedgroup.netdna-ssl.com/200/0-13-1599-1598/azure/dazed-prod/1260/6/1266382.jpg',
      'https://www.newamerica.org/images/jr0Y9140V62wQo5VgkZtKHqJy8w=/14844/fill-200x200/Jahdziah_St._Julien.jpg'
      
      ];

      let userIds = [8, 4, 1, 3, 2, 10, 9, 7, 6, 5, 11]
      let paymentMethod = ['mtn', 'paypal', 'mtn', 'mtn', 'orange', 'express_union', 'paypal', 'card', 'mtn', 'orange', 'card'];
      let userName = ['Kingsley', 'Jude', 'Lopex', 'Helio',' George', 'Ekama', 'Irish', 'Nissi', 'Jeff', 'Gerald', 'Akono']
      let LastName = ['Ngala', 'Amstrong', 'Judith', 'Mappe','Bush','Humphrey', 'Leonard', 'Amebong', 'Henry', 'Stone', 'Dilivio']
      let userTransactionData = [7800, 4200, 650, 450, 1000, 1800, 1300, 900, 25, 550, 810];
      let status = ['suceess', 'pending','failed'];
      
      

    
 let userdata =   userName.map((data, index)=>{
        return {
            ['userIds']: returnIdex(userIds, index),
            ['userName']:data,
            ['LastName']: returnIdex(LastName, index),
            ['amount']: returnIdex(userTransactionData, index),
            ['paymentMethod']: returnIdex(paymentMethod, index),
            ['pictures']: returnIdex(pictures, index)
           
        }
        
    })

    function returnIdex(arrayName:any, i: any){
        return arrayName[i]

    }

    export const validateUserData = userdata




      

      







