import { ADD_POST, REMOVE_POST, UPDATE_POST } from "./actionTypes"

const initialState = {
    posts: [
        {
            "id": 0,
            "name": "Md Yasin",
            "email": "yasinalimia@gmail.com",
            "phone": "014545541"
        },
        {
        "id": 1,
        "name": "Garrard Mussettini",
        "email": "gmussettini0@pcworld.com",
        "phone": "9224060056"
      }, {
        "id": 2,
        "name": "Lorens Ollerearnshaw",
        "email": "lollerearnshaw1@yandex.ru",
        "phone": "1966130988"
      }, {
        "id": 3,
        "name": "Danie Lunam",
        "email": "dlunam2@sbwire.com",
        "phone": "5737320375"
      }, {
        "id": 4,
        "name": "Wynny Simonelli",
        "email": "wsimonelli3@mapquest.com",
        "phone": "9034931366"
      }, {
        "id": 5,
        "name": "Jenine Dani",
        "email": "jdani4@xinhuanet.com",
        "phone": "1130171787"
      }, {
        "id": 6,
        "name": "Marika Dunlop",
        "email": "mdunlop5@sina.com.cn",
        "phone": "8394235123"
      }, {
        "id": 7,
        "name": "Spencer Arundel",
        "email": "sarundel6@wp.com",
        "phone": "8666372826"
      }, {
        "id": 8,
        "name": "Mahala Emer",
        "email": "memer7@zimbio.com",
        "phone": "0074463497"
      }, {
        "id": 9,
        "name": "Trstram Iorio",
        "email": "tiorio8@harvard.edu",
        "phone": "0578292785"
      }, {
        "id": 10,
        "name": "Britt Roycroft",
        "email": "broycroft9@huffingtonpost.com",
        "phone": "2679089766"
      }, {
        "id": 11,
        "name": "Darsey Trays",
        "email": "dtraysa@cnet.com",
        "phone": "8157566231"
      }, {
        "id": 12,
        "name": "Bogey Leicester",
        "email": "bleicesterb@livejournal.com",
        "phone": "5391444888"
      }, {
        "id": 13,
        "name": "Eugene Irons",
        "email": "eironsc@europa.eu",
        "phone": "2149462354"
      }, {
        "id": 14,
        "name": "Duffie Fogel",
        "email": "dfogeld@tripod.com",
        "phone": "7403737997"
      }, {
        "id": 15,
        "name": "Rozalin Ladbury",
        "email": "rladburye@desdev.cn",
        "phone": "0729260380"
      }, {
        "id": 16,
        "name": "Giffer Reddington",
        "email": "greddingtonf@imgur.com",
        "phone": "8592598834"
      }, {
        "id": 17,
        "name": "Sophi Taysbil",
        "email": "staysbilg@japanpost.jp",
        "phone": "7734214215"
      }, {
        "id": 18,
        "name": "Brose Dooman",
        "email": "bdoomanh@discovery.com",
        "phone": "0568776038"
      }, {
        "id": 19,
        "name": "Ursuline Mullins",
        "email": "umullinsi@bigcartel.com",
        "phone": "3014725374"
      }, {
        "id": 20,
        "name": "Eddi Gash",
        "email": "egashj@intel.com",
        "phone": "0887364098"
      }, {
        "id": 21,
        "name": "Emmanuel MacCaffrey",
        "email": "emaccaffreyk@weather.com",
        "phone": "8127241717"
      }, {
        "id": 22,
        "name": "Emelen McCaghan",
        "email": "emccaghanl@issuu.com",
        "phone": "6930435716"
      }, {
        "id": 23,
        "name": "Dode Beetham",
        "email": "dbeethamm@xing.com",
        "phone": "8297164489"
      }, {
        "id": 24,
        "name": "Mill Wishart",
        "email": "mwishartn@japanpost.jp",
        "phone": "8716277023"
      }, {
        "id": 25,
        "name": "Jayme Fuxman",
        "email": "jfuxmano@zdnet.com",
        "phone": "6284711123"
      }, {
        "id": 26,
        "name": "Archibold Ashingden",
        "email": "aashingdenp@microsoft.com",
        "phone": "3881755144"
      }, {
        "id": 27,
        "name": "Jennifer Cotillard",
        "email": "jcotillardq@amazon.de",
        "phone": "7390764279"
      }, {
        "id": 28,
        "name": "Rufe Dovey",
        "email": "rdoveyr@who.int",
        "phone": "2629861880"
      }, {
        "id": 29,
        "name": "Johan Fatharly",
        "email": "jfatharlys@csmonitor.com",
        "phone": "3556235579"
      }, {
        "id": 30,
        "name": "Babs Bartkiewicz",
        "email": "bbartkiewiczt@bloglovin.com",
        "phone": "4467714391"
      }, {
        "id": 31,
        "name": "Lefty Matonin",
        "email": "lmatoninu@shareasale.com",
        "phone": "0291388957"
      }, {
        "id": 32,
        "name": "Woodie Stoney",
        "email": "wstoneyv@nsw.gov.au",
        "phone": "8801473516"
      }, {
        "id": 33,
        "name": "Leora Sands",
        "email": "lsandsw@cafepress.com",
        "phone": "3251729403"
      }, {
        "id": 34,
        "name": "Kellen Hillyatt",
        "email": "khillyattx@paypal.com",
        "phone": "7165533370"
      }, {
        "id": 35,
        "name": "Forrest Kornacki",
        "email": "fkornackiy@cdbaby.com",
        "phone": "5772195298"
      }, {
        "id": 36,
        "name": "Illa Chazette",
        "email": "ichazettez@creativecommons.org",
        "phone": "2367399387"
      }, {
        "id": 37,
        "name": "Beck Connaughton",
        "email": "bconnaughton10@epa.gov",
        "phone": "8702408228"
      }, {
        "id": 38,
        "name": "Bekki Royden",
        "email": "broyden11@google.co.uk",
        "phone": "9455555085"
      }, {
        "id": 39,
        "name": "Thoma Tarbett",
        "email": "ttarbett12@engadget.com",
        "phone": "7678114796"
      }, {
        "id": 40,
        "name": "Susie Weedon",
        "email": "sweedon13@clickbank.net",
        "phone": "6130661673"
      }, {
        "id": 41,
        "name": "Ernesta Shoreson",
        "email": "eshoreson14@cnet.com",
        "phone": "7814491134"
      }, {
        "id": 42,
        "name": "Lurlene Dougliss",
        "email": "ldougliss15@cnn.com",
        "phone": "4413901967"
      }, {
        "id": 43,
        "name": "Evelina Ockland",
        "email": "eockland16@github.io",
        "phone": "8644678841"
      }, {
        "id": 44,
        "name": "Evangeline Ummfrey",
        "email": "eummfrey17@wunderground.com",
        "phone": "1421713535"
      }, {
        "id": 45,
        "name": "Corty Harley",
        "email": "charley18@e-recht24.de",
        "phone": "1089418469"
      }, {
        "id": 46,
        "name": "Talbot Bettleson",
        "email": "tbettleson19@weibo.com",
        "phone": "1765236118"
      }, {
        "id": 47,
        "name": "Dwight Haacker",
        "email": "dhaacker1a@uol.com.br",
        "phone": "8565289338"
      }, {
        "id": 48,
        "name": "Francisco Stove",
        "email": "fstove1b@state.gov",
        "phone": "3463545950"
      }, {
        "id": 49,
        "name": "Jed Maiklem",
        "email": "jmaiklem1c@sohu.com",
        "phone": "4871558584"
      }, {
        "id": 50,
        "name": "Verla BURWIN",
        "email": "vburwin1d@sakura.ne.jp",
        "phone": "6561842898"
      }]
      
}
const PostReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_POST: 
            return {
                ...state, posts: [...state.posts, action.payload]
            }
        case REMOVE_POST: 
            const newPosts = state.posts.filter(post=>post.id !== action.payload.id)
            return {
                ...state, posts: newPosts
            }
        case UPDATE_POST: 
        const updateState = state.posts.map(post=>post.id === action.payload.id ? action.payload : post);
        state.posts = updateState;
        return state;
            default:
                return state;
    }
}

export default PostReducer;