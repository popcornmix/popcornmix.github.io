
/*
Raw gym data - include a different file for different city

NEVER change order of gyms or delete gyms
ONLY append at the end, and mark deleted gyms with 'deleted: true'
BECAUSE progress is stored in user's localStorage by gym index

Entries for each gym:
{
  name: "The Gym Name",                // required
  location: [latitude,longitude],      // required
  district: "A Neighborhood",          // optional, used for sorting by neighborhood
  address: "e.g. street and house#",   // optional, used as label for google maps link
  park: true | "OSM feature",          // optional, potential EX raid location. If string, link to that OSM feature
  exraid: true,                        // optional, confirmed EX raid location (a raid actually happened here)
  deleted: true,                       // optional, used for hiding removed gyms without changing IDs
  
  // added by program in getGyms()
  id: number,                          // index in this list. THIS MUST NEVER CHANGE!
}
*/

function gymData() {
    return {
    city: "DE-MD", // country-city (used in localStorage key to allow tracking multiple cities)
    gyms: [
     {name: "DNA Path Sculpture", location: [52.166531,0.132501]},
     {name: "Oak Information Sculpture", location: [52.16786,0.107272]},
     {name: "Trumpington Meadows Trail Marker 1", location: [52.171699,0.104121]},
     {name: "Trumpington Pavillion", location: [52.172806,0.115321]},
     {name: "Byron's Pool", location: [52.172995,0.102155]},
     {name: "Sculpture at Rosie Hospital ", location: [52.1735,0.139554]},
     {name: "Saint Mary and Saint Michaels", location: [52.17387,0.10867]},
     {name: "Rose", location: [52.174153,0.139181]},
     {name: "Addenbrookes", location: [52.175461,0.142176], deleted: true},
     {name: "Addenbrookes Flag", location: [52.175954,0.143757], deleted: true},
     {name: "Anne Frank's Tree", location: [52.176297,0.138149]},
     {name: "Clifford Allbutt Building", location: [52.176479,0.143373]},
     {name: "Rupert Brooke Statue", location: [52.176549,0.096893]},
     {name: "The Log Run", location: [52.177414,0.148122]},
     {name: "The Kids Are Cool", location: [52.178027,0.150901]},
     {name: "Cherry Hinton East Chalk Pit Iron Age Hill Fort", location: [52.178298,0.169841]},
     {name: "The Green Man Pub", location: [52.180031,0.095081]},
     {name: "St James' Church", location: [52.181785,0.152169]},
     {name: "Cherry Hinton Chalk Pits 2", location: [52.182352,0.170081]},
     {name: "The Red Lion", location: [52.185772,0.171987]},
     {name: "Cherry Hinton Recreation Ground Memorial", location: [52.186231,0.17324]},
     {name: "Tree Tumblers", location: [52.186346,0.16394]},
     {name: "Old Millstone", location: [52.186474,0.16704]},
     {name: "Quaker Society Meeting House", location: [52.187384,0.144091]},
     {name: "United Reformed Church", location: [52.187876,0.144669]},
     {name: "Cherry Hinton Baptist Church", location: [52.188505,0.175797]},
     {name: "The Moon Sun and Stars", location: [52.190322,0.132295]},
     {name: "Cambridge Junction Arts", location: [52.190578,0.135937]},
     {name: "Junction Mural", location: [52.190626,0.136711]},
     {name: "Post Office War Memorial", location: [52.192758,0.139176]},
     {name: "St. Martin's Church", location: [52.193068,0.149921]},
     {name: "Systematic Beds of Herbaceous Plants", location: [52.193242,0.124594]},
     {name: "Ceres", location: [52.193406,0.135407]},
     {name: "Fountain at Cambridge University Botanic Garden", location: [52.19367,0.126896]},
     {name: "The Dawn Redwood", location: [52.193682,0.123985]},
     {name: "Cambridge Gardens Greenhouse", location: [52.194297,0.12637]},
     {name: "Flying Pig", location: [52.194472,0.131756]},
     {name: "Kett House Tree", location: [52.194842,0.131599]},
     {name: "Paradise LNR", location: [52.195004,0.115673]},
     {name: "Newnham Post Office", location: [52.195958,0.109652]},
     {name: "Longest Covered Footbridge", location: [52.196111,0.137777]},
     {name: "The Brook", location: [52.196114,0.155376]},
     {name: "St Mark's Newnham", location: [52.196463,0.108243]},
     {name: "Stone Helix", location: [52.197542,0.153946]},
     {name: "St. Philip's Church", location: [52.19767,0.146039]},
     {name: "Lensfield Hotel", location: [52.197974,0.123561]},
     {name: "Sancton Wood Unicorn", location: [52.198147,0.130207]},
     {name: "Polar Harpoon Gun", location: [52.198347,0.125964]},
     {name: "Downing College Back Gate", location: [52.198577,0.125462]},
     {name: "Our Lady and English Martyrs Church", location: [52.199022,0.12739]},
     {name: "Empress", location: [52.199063,0.147127]},
     {name: "Hot Numbers", location: [52.199404,0.139477]},
     {name: "St. Barnabas' Church", location: [52.19953,0.138045]},
     {name: "Salvation Army Hall", location: [52.199832,0.136689]},
     {name: "The Fitzwilliam Museum", location: [52.199936,0.120196]},
     {name: "Dales Brewery", location: [52.200036,0.138502]},
     {name: "The C3 Centre", location: [52.200317,0.157283]},
     {name: "Peterhouse", location: [52.200872,0.118465]},
     {name: "Selwyn College Plodge", location: [52.201007,0.105527]},
     {name: "Sidgwick", location: [52.201284,0.109341]},
     {name: "George Thomson Building", location: [52.201323,0.100541]},
     {name: "Leckhampton House", location: [52.201568,0.101062]},
     {name: "Faculty of Law", location: [52.201594,0.109002]},
     {name: "Reality Checkpoint", location: [52.202171,0.128176]},
     {name: "Skate Park", location: [52.202182,0.131224]},
     {name: "Rattee Memorial", location: [52.202475,0.136162]},
     {name: "Black Bird", location: [52.203147,0.138675]},
     {name: "Zion Baptist Church", location: [52.203672,0.132548]},
     {name: "The Corpus Clock", location: [52.203739,0.117669]},
     {name: "All Saints Teversham Church", location: [52.204587,0.188013]},
     {name: "Blue Moon Pub", location: [52.204797,0.136495]},
     {name: "Confucius", location: [52.204924,0.112552]},
     {name: "Cambridge University Library", location: [52.205051,0.10847]},
     {name: "Snowy Farr Memorial Sculpture", location: [52.205067,0.119443]},
     {name: "Statues Robinson College", location: [52.205133,0.104946]},
     {name: "Philip de Koning Sailing to the Future", location: [52.205196,0.103834]},
     {name: "Christ's College Gate", location: [52.205296,0.121927]},
     {name: "Market Square Fountain", location: [52.205356,0.119056]},
     {name: "Holy Trinity War Memorial", location: [52.205853,0.120715]},
     {name: "Beehive Honeycomb", location: [52.206048,0.143709]},
     {name: "Sidney Sussex Obelisk", location: [52.206746,0.120966]},
     {name: "Quorum Fountain", location: [52.206788,0.16459]},
     {name: "Wesley Methodist Church Sculpture", location: [52.207181,0.127162]},
     {name: "Champion of the Thames ", location: [52.207314,0.124419]},
     {name: "The Hopbine", location: [52.207373,0.129274]},
     {name: "Cambridge Brew House", location: [52.20743,0.122116]},
     {name: "All Saints Cross", location: [52.207477,0.118282]},
     {name: "Cambridge Lawn Tennis Club", location: [52.207957,0.096502]},
     {name: "The Burleigh Arms", location: [52.208177,0.132871]},
     {name: "Round Church", location: [52.208433,0.118868]},
     {name: "ADC Theatre", location: [52.208551,0.120085]},
     {name: "Coldhams Common BMX Park", location: [52.208616,0.154752]},
     {name: "Eagle @ west gate St John's", location: [52.208816,0.111268]},
     {name: "'Genesis' by John Robinson", location: [52.209385,0.10292]},
     {name: "Institute For Manufacturing", location: [52.209708,0.087425]},
     {name: "The Plough Coton", location: [52.209827,0.066411], deleted: true},
     {name: "The Remembered", location: [52.210032,0.144128]},
     {name: "Betty and Gordon Moore Library", location: [52.210102,0.102992]},
     {name: "Coton St. Peter's Church", location: [52.210293,0.060367], deleted: true},
     {name: "Electrical Engineering Division", location: [52.210407,0.092895]},
     {name: "Iron Spike", location: [52.210414,0.147658]},
     {name: "Cambridge International Airport", location: [52.210852,0.173643]},
     {name: "Spiky Post Box", location: [52.21096,0.13871]},
     {name: "Giant Anchor", location: [52.21127,0.13684]},
     {name: "Barnwell Road Library", location: [52.211503,0.163201]},
     {name: "Castle Street Methodist Church ", location: [52.21151,0.113788]},
     {name: "Whittle Labs", location: [52.211965,0.092186]},
     {name: "Statue of the Meadows", location: [52.21241,0.135622]},
     {name: "British Antarctic Survey Sledge Dog Monument", location: [52.212504,0.080717]},
     {name: "St Edmund's Chapel", location: [52.212867,0.108684]},
     {name: "36 Inch Telescope", location: [52.213434,0.094109]},
     {name: "Greene King The Boat House", location: [52.213654,0.123298]},
     {name: "The Leper Chapel", location: [52.213831,0.152536]},
     {name: "Gathering Of Owls", location: [52.213979,0.107903]},
     {name: "The Moller Centre", location: [52.214098,0.098921]},
     {name: "The Waterman Pub", location: [52.214191,0.12541]},
     {name: "H C W Barrett Plaque", location: [52.214443,0.105251]},
     {name: "The Old Spring", location: [52.214457,0.127957]},
     {name: "Catholic Church of St. Vincent De Paul", location: [52.214942,0.168062]},
     {name: "Chesterton War Memorial", location: [52.215533,0.139326]},
     {name: "Saint Luke's Church", location: [52.215772,0.116084]},
     {name: "Friends of Histon Road Cemetery", location: [52.216085,0.111086]},
     {name: "Madingley American Cemetery - Operations Map", location: [52.216263,0.056761], deleted: true},
     {name: "Ascension Parish Burial Ground", location: [52.217273,0.099802]},
     {name: "Haymakers Chesterton", location: [52.217501,0.139336]},
     {name: "Green Dragon Bridge", location: [52.217543,0.145767]},
     {name: "Green Dragon Pub", location: [52.217878,0.14551]},
     {name: "St Laurence's RC Church", location: [52.218109,0.129371]},
     {name: "Chesterton Medical Centre Art", location: [52.218417,0.137054]},
     {name: "St. Augustine's Church ", location: [52.219744,0.107894]},
     {name: "Ancient Shepherds Pub", location: [52.22043,0.172516]},
     {name: "The Carlton Arms", location: [52.22215,0.119023]},
     {name: "Cambridge North Station", location: [52.223916,0.158292], deleted: true},
     {name: "The Plough Fen Ditton", location: [52.223983,0.168317]},
     {name: "Cambridge Gurdwara ", location: [52.225112,0.128737]},
     {name: "Golden Hind Pub Cambridge", location: [52.227814,0.145461]},
     {name: "Jenny Wren", location: [52.229567,0.137149]},
     {name: "Kid's Play Area", location: [52.230217,0.138863]},
     {name: "Cambridge Science Park East", location: [52.230273,0.146762]},
     {name: "Meadows Community Centre", location: [52.230794,0.117612]},
     {name: "Cambridge Science Park", location: [52.231294,0.149805]},
     {name: "Underpass Graffiti Mural", location: [52.231356,0.128751]},
     {name: "Buchan Street Neighbourhood Centre", location: [52.232315,0.122129]},
     {name: "Cambridge Science Park West", location: [52.233797,0.136193]},
     {name: "Number Snake", location: [52.234163,0.120224]},
     {name: "Five Poles Sculpture", location: [52.234379,0.140488]},
     {name: "Waveguide", location: [52.234851,0.130752]},
     {name: "Four Leaf Clover", location: [52.235027,0.125773]},
     {name: "Travelodge Deer", location: [52.235181,0.120207]},
     {name: "Fountain - Cambridge", location: [52.235627,0.153038]},
     {name: "OP - Stone Shards Alpha", location: [52.235696,0.126148]},
     {name: "Milton Park Memorial", location: [52.236106,0.165696]},
     {name: "Rainbow Poles", location: [52.236384,0.163274]},
     {name: "The Wild Place", location: [52.236503,0.162541]},
     {name: "Tessa Cohen Clock Tower", location: [52.238754,0.154624]},
     {name: "Sycamores Basketball Court", location: [52.239323,0.153394]},
     {name: "Girton War Memorial", location: [52.240379,0.083605], deleted: true},
     {name: "Milton Country Park Fen Road Entrance", location: [52.241347,0.168651]},
     {name: "Histon Historical Station", location: [52.242304,0.110406], deleted: true},
     {name: "Milton White Horse", location: [52.243311,0.161416]},
     {name: "Milton War Memorial", location: [52.243882,0.164198]},
     {name: "Impington Village Sign Art", location: [52.24404,0.111838], deleted: true},
     {name: "Vision Park Sculpture", location: [52.244316,0.107729], deleted: true},
     {name: "Cambridge Jubilee Cycleway", location: [52.214233,0.18285]},
     {name: "Coleridge Paddling Pool", location: [52.193,0.144314]},
     {name: "Ramsden Square Rec", location: [52.22735,0.1416]},
     {name: "Climbing Stone", location: [52.217741,0.10984400000006644]},
     {name: "Qualcomm North Fountain", location: [52.227501999999994,0.1549929999999904]},
     {name: "Dragon Intercom", location: [52.189469,0.122352]},
     {name: "Histon War Memorial", location: [52.248099,0.108823]},
     {name: "David Gregory Marshall MBE", location: [52.20853,0.12075700000002598]},
     {name: "Climbing Stone", location: [52.217741,0.10984400000006644], deleted:true},
     {name: "Cherry Hinton Brook", location: [52.19436199999999,0.15909899999996924]},
     {name: "Silver and Gold Metallic Twists Façade", location: [52.173010999999995,0.13760899999999765]},
     {name: "Chesterton Working Mens Club", location: [52.218087999999995,0.14386000000001786]},
     {name: "King's Hedges Community Football Pitch", location: [52.230538,0.12431200000003173]},
     {name: "Fiftieth Anniversary Commemorative Plaque of the End of WW1", location: [52.20465999999999,0.18866900000000442]},
     {name: "Sunclock on the ground", location: [52.223504,0.149061]},
     {name: "Little People Mosaic", location: [52.230553,0.118489]},
     {name: "Boy with Duck Statue", location: [52.228626,0.084606]},
     {name: "Girton College Main Gate", location: [52.228389,0.083619]},
     {name: "Twin Stars", location: [52.2442,0.107562]},
     {name: "North Arbury Chapel", location: [52.230829,0.129354]},
     {name: "Defra Eastbrook Sculpture 2003", location: [52.188853,0.12982]},
     {name: "OP - Stone Shards Beta", location: [52.235604000,0.126702000]},
     {name: "Capital Park Double Helix", location: [52.184052000,0.190647000]},
     {name: "Wilberforce Road Sports Ground Pavilion", location: [52.206007000,0.097143000]},
     {name: "Welcome To Cherry Hinton", location: [52.193337000,0.181561000]},
     {name: "Playhouse Of Unlimited Adventure", location: [52.189709000,0.159276000]},
     {name: "Lichfield Road Play Area", location: [52.188796000,0.150663000]},
     {name: "Wired Nexus Fulbourn", location: [52.182902000,0.185922000]},
     {name: "Fabulous Toilets", location: [52.200045000,0.128138000]},
     {name: "St Andrews Cherry Hinton", location: [52.191839000,0.177933000]},
     {name: "Lord Byron Inn", location: [52.174347000,0.110668000]},

    //{name: "", district: "", address: "", location: []},
    ]};
}
