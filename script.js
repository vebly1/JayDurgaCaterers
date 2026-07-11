/* ==========================================================================
   JAY DURGA CATERERS - PREMIUM CATERING SERVICES
   JAVASCRIPT (script.js)
   ========================================================================== */

/* ===== CATEGORY UNSPASH IMAGE DATABASE ===== */
const categoryImages = {
    'Soup': [
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1625944228741-cf30983ecb91?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1613506132717-3bf7a18f8bb1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1612450799777-62cf9b17929a?auto=format&fit=crop&w=500&q=80'
    ],
    'Paneer Dishes': [
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1605333978346-468f3b778a3c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1618412613149-14a09a560f7e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621979087428-111c1ab96869?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1617692518154-15697f329929?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1645177625172-59571fa362ff?auto=format&fit=crop&w=500&q=80'
    ],
    'Sweet': [
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1605698802041-b764efd49cc1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626200419199-391ae4be7e40?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601303589874-a698a834925e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=500&q=80'
    ],
    'Vegetable': [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603569283847-be4037f37319?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=500&q=80'
    ],
    'Maharashtrian': [
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1617692518154-15697f329929?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1605333978346-468f3b778a3c?auto=format&fit=crop&w=500&q=80'
    ],
    'Dal': [
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1618412613149-14a09a560f7e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1612450799777-62cf9b17929a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80'
    ],
    'Rice': [
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80'
    ],
    'Roti': [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80'
    ],
    'Snacks': [
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1605333978346-468f3b778a3c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80'
    ],
    'Raita': [
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1625944228741-cf30983ecb91?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80'
    ],
    'Salad': [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1623428187969-5da2dced5eb8?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603569283847-be4037f37319?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=500&q=80'
    ],
    'Chaas & Beverages': [
        'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1555529241-ef1b5366d48b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1625944228741-cf30983ecb91?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80'
    ],
    'Italian Pasta': [
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621979087428-111c1ab96869?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80'
    ],
    'Chinese': [
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603569283847-be4037f37319?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1623428187969-5da2dced5eb8?auto=format&fit=crop&w=500&q=80'
    ],
    'Thai Food': [
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1612450799777-62cf9b17929a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80'
    ],
    'South Indian': [
        'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80'
    ],
    'Delhi Chaat': [
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80'
    ],
    'Papad & Kurkura': [
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80'
    ]
};

/* ===== DISH KEYWORD IMAGE DATABASE ===== */
const dishKeywords = {
    // SOUP CATEGORIES
    'tomato': [
        'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],
    'manchow': [
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80'
    ],
    'coriander': [
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80'
    ],
    'thai': [
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80'
    ],
    'cream': [
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1613506132717-3bf7a18f8bb1?auto=format&fit=crop&w=500&q=80'
    ],
    'sweetcorn': [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80'
    ],
    'palak': [
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1618412613149-14a09a560f7e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80'
    ],
    'clear': [
        'https://images.unsplash.com/photo-1612450799777-62cf9b17929a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80'
    ],

    // PANEER / INDIAN GRAVY CATEGORIES
    'tikka': [
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80'
    ],
    'paneer': [
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1645177625172-59571fa362ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80'
    ],
    'kofta': [
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621979087428-111c1ab96869?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=500&q=80'
    ],
    'pahadi': [
        'https://images.unsplash.com/photo-1618412613149-14a09a560f7e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1616501268209-ecf6057c327c?auto=format&fit=crop&w=500&q=80'
    ],

    // SWEETS / DESSERTS
    'jalebi': [
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626200419199-391ae4be7e40?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80'
    ],
    'rabdi': [
        'https://images.unsplash.com/photo-1601303589874-a698a834925e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1605698802041-b764efd49cc1?auto=format&fit=crop&w=500&q=80'
    ],
    'basundi': [
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601303589874-a698a834925e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1605698802041-b764efd49cc1?auto=format&fit=crop&w=500&q=80'
    ],
    'rasmalai': [
        'https://images.unsplash.com/photo-1626200419199-391ae4be7e40?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601303589874-a698a834925e?auto=format&fit=crop&w=500&q=80'
    ],
    'shrikhand': [
        'https://images.unsplash.com/photo-1605698802041-b764efd49cc1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80'
    ],
    'poli': [
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],
    'sheera': [
        'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80'
    ],
    'sweet': [
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626200419199-391ae4be7e40?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601303589874-a698a834925e?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=500&q=80'
    ],
    'mithai': [
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626200419199-391ae4be7e40?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=500&q=80'
    ],

    // RUSTIC / VEGETABLE / MAHARASHTRIAN
    'vangi': [
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80'
    ],
    'bhendi': [
        'https://images.unsplash.com/photo-1617692518154-15697f329929?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=500&q=80'
    ],
    'masoor': [
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80'
    ],
    'usal': [
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],

    // DAL / LENTIL CATEGORIES
    'dal': [
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80'
    ],
    'rasam': [
        'https://images.unsplash.com/photo-1612450799777-62cf9b17929a?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=500&q=80'
    ],
    'amti': [
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],

    // RICE CATEGORIES
    'biryani': [
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80'
    ],
    'jeera': [
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80'
    ],
    'pulav': [
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80'
    ],
    'pulao': [
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80'
    ],
    'khichdi': [
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80'
    ],
    'steam': [
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80'
    ],

    // ROTI / BREADS
    'naan': [
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80'
    ],
    'puri': [
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],
    'poori': [
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],
    'chapati': [
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80'
    ],
    'phulka': [
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80'
    ],
    'roti': [
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80'
    ],
    'kulcha': [
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],
    'paratha': [
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80'
    ],
    'bhakri': [
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80'
    ],

    // SNACKS & STARTERS
    'spring roll': [
        'https://images.unsplash.com/photo-1603569283847-be4037f37319?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80'
    ],
    'roll': [
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603569283847-be4037f37319?auto=format&fit=crop&w=500&q=80'
    ],
    'pakoda': [
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],
    'vadi': [
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80'
    ],
    'khaman': [
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80'
    ],
    'cutlet': [
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80'
    ],
    'patties': [
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80'
    ],
    'basket': [
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1605333978346-468f3b778a3c?auto=format&fit=crop&w=500&q=80'
    ],

    // RAITA / YOGURT
    'raita': [
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80'
    ],

    // SALADS
    'salad': [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1623428187969-5da2dced5eb8?auto=format&fit=crop&w=500&q=80'
    ],
    'koshibir': [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80'
    ],

    // CHAAST / BEVERAGES
    'chaas': [
        'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80'
    ],
    'mattha': [
        'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80'
    ],
    'beverage': [
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1555529241-ef1b5366d48b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80'
    ],
    'tea': [
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1555529241-ef1b5366d48b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80'
    ],
    'coffee': [
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1555529241-ef1b5366d48b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80'
    ],

    // ITALIAN / PASTA
    'pasta': [
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80'
    ],
    'penne': [
        'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80'
    ],
    'macaroni': [
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80'
    ],
    'bruschetta': [
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621979087428-111c1ab96869?auto=format&fit=crop&w=500&q=80'
    ],

    // CHINESE
    'manchurian': [
        'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80'
    ],
    'noodles': [
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1623428187969-5da2dced5eb8?auto=format&fit=crop&w=500&q=80'
    ],
    'crispy': [
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603569283847-be4037f37319?auto=format&fit=crop&w=500&q=80'
    ],
    '65': [
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603569283847-be4037f37319?auto=format&fit=crop&w=500&q=80'
    ],

    // SOUTH INDIAN
    'dosa': [
        'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80'
    ],
    'idli': [
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80'
    ],
    'uttappa': [
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80'
    ],

    // STREET CHAAT
    'chaat': [
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80'
    ],
    'papdi': [
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80'
    ],
    'tikki': [
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80'
    ],

    // PAPAD / CRUNCHY SNACKS
    'papad': [
        'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80'
    ],
    'khichiya': [
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80'
    ],
    'fryums': [
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1628294895515-ec5b5a26c483?auto=format&fit=crop&w=500&q=80'
    ]
};

/* ===== STRICT ONE-TO-ONE DISH IMAGE DATABASE ===== */
const dishSpecificImages = {
    "Veg of Cream": "Menu images/veg of cream.jpeg",
    "Veg Manchow Soup": "Menu images/veg- manchow.jpeg",
    "Lemon Coriander Soup": "Menu images/Lemon-Coriander-Soup.jpeg",
    "Thai Soup": "Menu images/thai vegetable soup.jpeg",
    "Italian Soup": "Menu images/italian soup.jpeg",
    "Tomato Shorba": "Menu images/tomato shorba.jpeg",
    "Tomato Soup": "Menu images/tomato soup.jpeg",
    "Sweetcorn Soup": "Menu images/sweet corn soup.jpeg",
    "Veg Darbar Soup": "Menu images/veg darbar soup.jpeg",
    "Veg Clear Soup": "Menu images/veg clear soup.jpeg",
    "Hot and Sour Soup": "Menu images/Hot and sour soup.jpeg",
    "Palak Soup": "Menu images/palak soup.jpeg",


    "Paneer Pahadi": "Menu images/Paneer Pahadi.jpeg",
    "Paneer Kis Masala": "Menu images/Paneer Kis Masala.jpeg",
    "Paneer Shahi": "Menu images/Paneer Shahi.jpeg",
    "Paneer Pasanda": "Menu images/Paneer Pasanda.jpeg",
    "Paneer Chingari": "Menu images/Paneer Chingari.jpeg",
    "Paneer Tikka Masala": "Menu images/Paneer Tikka Masala.jpeg",
    "Paneer Kofta": "Menu images/Paneer Kofta.jpeg",
    "Paneer Miami Kofta": "Menu images/Paneer Miami Kofta.jpeg",
    "Paneer Patiala": "Menu images/Paneer Patiala.jpeg",
    "Paneer Sweetcorn": "Menu images/Paneer Sweetcorn.jpeg",
    "Veg Dhaniya Paneer": "Menu images/Veg Dhaniya Panee.jpeg",
    "Paneer Mastani": "Menu images/Paneer Mastani.jpeg",


    "Malai Matka Rabdi": "Menu images/malai matka rabdi.webp",
    "Matka Pista Rabdi": "Menu images/matka pista.webp",
    "Badam Matka Rabdi": "Menu images/badam matka.webp",
    "Kaju Matka Rabdi": "Menu images/kaju matka.webp",
    "Sugar Free Dry Fruit Sweet": "Menu images/Dry fruits.jpeg",
    "Badam Ice Pan": "Menu images/Badam Ice Pan.jpeg",
    "Kaju Rose Ball": "Menu images/kaju rose ball.webp",
    "Kajucorn Mithai": "Menu images/Kajucorn Mithai.jpeg",
    "Rabdi Jalebi": "Menu images/jalebi rabdi.webp",
    "Anjeer Basundi": "Menu images/anjeer basundi.webp",
    "Bengali Rabdi": "Menu images/Bengali Rabdi.jpeg",
    "Ice Barfi": "Menu images/ice barfi.webp",
    "Rasmalai": "Menu images/Rasmalai.jpeg",
    "Shrikhand": "Menu images/Shrikhand.jpeg",
    "Puran Poli": "Menu images/puran poli.jpeg",
    "Pineapple Sheera": "Menu images/Pineapple Sheera.jpeg",
    "Kesar Dollar Jalebi": "Menu images/Kesar Dollar Jalebi.jpeg",


    "Veg Banjara": "Menu images/Veg Banjara.jpeg",
    "Veg Jaipuri": "Menu images/Veg Jaipuri.jpeg",
    "Veg Chingari": "Menu images/Veg Chingari.jpeg",
    "Veg Rajasthani": "Menu images/Veg Rajasthani.jpeg",
    "Veg Maratha": "Menu images/Veg Maratha.jpeg",
    "Veg Maharani": "Menu images/Veg Maharani.jpeg",
    "Veg Chatpata": "Menu images/Veg Chatpata.jpeg",
    "Veg Kofta": "Menu images/Veg Kofta.jpeg",
    "Hara Pyaz Lasun Dhaniya Veg": "Menu images/Hara Pyaz Lasun Dhaniya Veg.jpeg",
    "Veg Kolhapuri": "Menu images/Veg Kolhapuri.jpeg",
    "Mix Veg": "Menu images/Mix Veg.jpeg",
    "Veg Tawa Bhaji": "Menu images/Veg Tawa Bhaji.jpeg",
    "Veg Makhanwala": "Menu images/Veg Makhanwala.jpeg",
    "Capsicum Fry": "Menu images/Capsicum Fry.jpeg",
    "Tawa Mehfil": "Menu images/Tawa Mehfill.jpeg",
    "Methi Malai Matar": "Menu images/Methi Malai Matar.jpeg",


    "Matki Usal": "Menu images/Matki Usal.jpeg",
    "Besan (Pithla)": "Menu images/Pitala.jpeg",
    "Bharleli Vangi": "Menu images/Bharleli Vangi.jpeg",
    "Bhendi Masala": "Menu images/Bhendi Masala.jpeg",
    "Akkha Masoor": "Menu images/Akhha Masoor.jpeg",
    "Durga Kurma": "Menu images/Durga Kurma.jpeg",
    "Alu Bhendi Masala": "Menu images/Alu Bhindi Masala.jpeg",
    "Chawli Usal": "Menu images/Chawli Usal.jpeg",
    "Batata Sukhi Bhaji": "Menu images/Batata Sukhi Bhaji.jpeg",
    "Dodka Masala": "Menu images/Dodka Masala.jpeg",
    "Gobi Watana": "Menu images/Gobi Watana.jpeg",


    "Dal Tadka": "Menu images/dal tadaka.jpeg",
    "Dal Fry": "Menu images/dal fry.jpeg",
    "Dal Makhani": "Menu images/dal makhani.jpeg",
    "Dal Maharani": "Menu images/dal maharani.jpeg",
    "Dal Lasuni": "Menu images/dal lasuni.jpeg",
    "Gujarati Dal": "Menu images/gujrati dal.jpeg",
    "Rajasthani Dal": "Menu images/Rajasthani-Dal.png",
    "Punjabi Dal": "Menu images/Panjabi dal.jpeg",
    "Tomato Rasam": "Menu images/tomato rassam.jpeg",
    "Onion Dal Handi": "Menu images/onion dal handi.jpeg",
    "Kolhapuri Amti": "Menu images/kolhapuri amti.jpeg",
    "Shevga Sheng Amti": "Menu images/shevga sheng aamti.jpeg",


    "Masala Bhaat": "Menu images/Masala Bhaat.jpeg",
    "Jeera Rice": "Menu images/Jeera Rice.jpeg",
    "Veg Pulav": "Menu images/Veg Pulav.jpeg",
    "Green Peas Pulav": "Menu images/Green Peas Pulav.jpeg",
    "Masala Pulav": "Menu images/Masala pulav.jpeg",
    "Ram Khichdi": "Menu images/Ram Khicadi.jpeg",
    "Akkha Moong Khichdi": "Menu images/Akkha Moong Khicadi.jpeg",
    "Veg Dum Biryani": "Menu images/Veg Dum Biryani.jpeg",
    "Durga Pulav": "Menu images/Durga Pulav.jpeg",
    "Veg Kaju Pulav": "Menu images/Veg Kaju Pulav.jpeg",
    "Veg Gravy Pulav": "Menu images/Veg Gravy Pulav.jpeg",
    "Phodni Rice": "Menu images/Phodni Rice.jpeg",
    "Kala Bhaat": "Menu images/Masala pulav.jpeg",
    "Biryani Rice": "Menu images/Biryani Rice.jpeg",
    "Steam Rice": "Menu images/Steam Rice.jpeg",


    "Ghee Phulka": "Menu images/Ghee Phulka.jpeg",
    "Plain Puri": "Menu images/Puri.jpeg",
    "Masala/Palak Puri": "Menu images/Masala Puri.jpeg",
    "Chapati": "Menu images/Chapati.jpeg",
    "Tawa Ghee Paratha": "Menu images/Tawa Ghee Paratha.jpeg",
    "Tandoori Roti": "Menu images/Tandoori Roti.jpeg",
    "Tandoori Kulcha": "Menu images/Tandoori Kulcha.jpeg",
    "Rumali Roti": "Menu images/Rumali Roti.jpeg",
    "Lachha Paratha": "Menu images/Laccha paratha.jpeg",
    "Jowar/Bajra Bhakri": "Menu images/Bhakari.jpeg",
    "Delhi Butter Naan": "Menu images/Delhi Butter Naan.jpeg",
    "Masala Dashmi": "Menu images/Masala Dashmi.jpeg",


    "Cheese Spinach Roll": "Menu images/cheese spinach rol.jpeg",
    "Cheese Corn Ball": "Menu images/cheeese corn ball.jpeg",
    "Kothimbir Vadi": "Menu images/kothimbir kali.jpeg",
    "Suralichi Vadi": "Menu images/survali vadi.jpeg",
    "Vegetable Roll": "Menu images/vegetable roll.jpeg",
    "Titanic Snack": "Menu images/titanic snack.jpeg",
    "Veg Spring Roll": "Menu images/veg Spring Roll.jpeg",
    "Sponge Khaman": "Menu images/sponge khaman.jpeg",
    "Veg Khaman": "Menu images/veg khaman.jpeg",
    "Veg Basket": "Menu images/Veg basket.jpeg",
    "Mix Pakoda": "Menu images/mix pakoda.jpeg",
    "Veg Kabab": "Menu images/Veg Kebab.webp",
    "Vegetable Cutlet": "Menu images/vegetable katlet.jpeg",
    "Cheese Patties": "Menu images/Cheese Patties.jpeg",
    "American Basket": "Menu images/American Basket.jpeg",
    "Sweetcorn Patties": "Menu images/Sweetcorn Patties.jpeg",
    "Mini Bombay Vada": "Menu images/Mini bombay Vada.jpeg",
    "Besan Vadi": "Menu images/Besan Vadi.jpeg",


    "Boondi Raita": "Menu images/bundi rayata.jpeg",
    "Rajasthani Raita": "Menu images/rajasthani rayata.jpeg",
    "Fruit Raita": "Menu images/fruit rayata.jpeg",
    "Pineapple Raita": "Menu images/pineapple rayata.jpeg",
    "Veg Raita": "Menu images/veg rayata.jpeg",
    "Onion Raita": "Menu images/onion rayata.jpeg",
    "Cucumber (Kakdi) Raita": "Menu images/kakadi rayata.jpeg",
    "Mix Raita": "Menu images/mix rayata.jpeg",
    "Live Garam Raita": "Menu images/Live Garam Raita.jpeg",
    "Kashmiri Raita": "Menu images/kashmiri rayata.jpeg",
    "Marwari Raita": "Menu images/marvadi rayata.jpeg",
    "Matka Raita": "Menu images/mataka rayata.jpeg",
    "Jodhpuri Raita": "Menu images/Jodhpuri Raita.jpeg",


    "Green Salad": "Menu images/green salad.jpeg",
    "Onion-Beet Salad": "Menu images/kanda beet salad.png",
    "Dahi Koshibir": "Menu images/dahi koshimbir.jpeg",
    "Dalimb Koshibir": "Menu images/dalim koshimbir.jpeg",
    "Pineapple Taj": "Menu images/Pineapple taj.jpeg",
    "Papaya Salad": "Menu images/papaya salad.jpeg",
    "Sukhi Koshibir": "Menu images/Suki koshimbir.jpeg",
    "Russian Salad": "Menu images/Russian-Salad.jpeg",
    "Kolhapuri Koshibir": "Menu images/kolhapuri koshimbir.jpeg",
    "Hot Corn Salad": "Menu images/hot corn salad.jpeg",
    "Tofu & Veg Salad": "Menu images/Tofu and veg salad.jpeg",
    "Gobi Anar Salad": "Menu images/Gobi Anar Salad.jpeg",


    "Mattha": "Menu images/mattha.jpeg",
    "Samka Mattha": "Menu images/samka mattha.jpeg",
    "Masala Mattha": "Menu images/masala mattha.jpeg",
    "Kolhapuri Mattha": "Menu images/kolhapuri mattha.jpeg",
    "Boondi Mattha Solkadhi": "Menu images/boondi mathha solkadhi.jpeg",
    "Masala Chaas": "Menu images/masala-chaas.jpeg",
    "Jeera Chaas": "Menu images/jira chaas.jpeg",
    "Pudina Chaas": "Menu images/pudina chaas.png",
    "Kothimbiri Chaas": "Menu images/kothimbir chaas.jpeg",
    "Samkawali Chaas": "Menu images/samkavali tak.jpeg",
    "Kolhapuri Tak": "Menu images/kolhapuri tak.png",


    "Bruschetta": "Menu images/brasetta.webp",
    "Cheese Pasta": "Menu images/Cheese pasta.jpeg",
    "Cream Pasta": "Menu images/Cream pasta.jpeg",
    "Paneer Pasta": "Menu images/paneer pasta.webp",
    "Green Pasta": "Menu images/green pasta.webp",
    "Megroni Pasta": "Menu images/Macroni.jpeg",
    "Penne Pasta": "Menu images/patri pasta.webp",
    "Macaroni Pasta": "Menu images/macroni pasta.webp",
    "Cheese Ball Wine": "Menu images/cheese ball pasta.jpeg",
    "Penne Alfredo Pasta": "Menu images/panne alfado pasta.webp",
    "Italian Red Pasta": "Menu images/italian red pasta.webp",
    "Italian White Pasta": "Menu images/italian white pasta.webp",


    "Veg Manchurian": "Menu images/Veg Manchurian.jpeg",
    "Schezwan Noodles": "Menu images/Schezwan noodles.jpeg",
    "Schezwan Rice": "Menu images/Schezwan Rice.jpeg",
    "Hakka Noodles": "Menu images/Hakkk Noodles.jpeg",
    "Schezwan Chutney": "Menu images/Schezwan chutney.jpeg",
    "Paneer Manchurian": "Menu images/Paneer Manchurian.jpeg",
    "Veg Combination": "Menu images/Veg combination.jpeg",
    "Veg Crispy": "Menu images/Veg crispy.jpeg",
    "Paneer 65": "Menu images/Paneer 65.jpeg",
    "Alu 65": "Menu images/Alu 65.jpeg",
    "Gobi Manchurian": "Menu images/Gobi Manchurian.jpeg",
    "Manchurian Rice": "Menu images/Manchurian Rice.jpeg",


    "Thai Red Curry": "Menu images/Thai red curry.jpeg",
    "Thai Yellow Curry": "Menu images/Thai yellow curry.jpeg",
    "Vietnamese Topaz Curry": "Menu images/Vietnamese topaz curry.jpeg",
    "Kapitan Curry": "Menu images/Kapitan curry.jpeg",
    "Pad Thai Noodles": "Menu images/Pad thai noodles.jpeg",
    "Thai Chili Rice": "Menu images/Thai chilli rice.jpeg",
    "Thai Fried Rice": "Menu images/Thai fried rice.jpeg",
    "Nasi Goreng": "Menu images/Nasi Goreng.jpeg",
    "Singapuri Charmurto": "Menu images/Singapuri Charmurto.jpeg",
    "Bihun Goreng": "Menu images/Bihun Goreng.jpeg",


    "Loni Dosa": "Menu images/Loni dosa.jpeg",
    "Thatte Idli": "Menu images/Thatte idli.jpeg",
    "Tomato Uttappa": "Menu images/Tomato uttappa.jpeg",
    "Onion Uttappa": "Menu images/Onion uttappa.jpeg",
    "Rava Dosa": "Menu images/Rava dosa.jpeg",
    "Neer Dosa": "Menu images/Neer dosa.jpeg",
    "Chinese Dosa": "Menu images/Chinese dosa.jpeg",
    "Davangere Special Dosa": "Menu images/Davangiri dosa.jpeg",
    "Masala Dosa": "Menu images/Masala dosa.jpeg",
    "Mysore Dosa": "Menu images/Mysore dosa.jpeg",
    "Tomato Omelette": "Menu images/Tomato omelette.jpeg",
    "Paper Dosa": "Menu images/Paper dosa.jpeg",


    "Delhi Chaat": "Menu images/Delhi chaat.jpeg",
    "Katori Papdi Chaat": "Menu images/Katori Chaat.jpeg",
    "Chole Patile Chaat": "Menu images/Chole patile chaat.jpeg",
    "Kela Papdi Chaat": "Menu images/Kela papdi chat.jpeg",
    "Dahi Papdi Chaat": "Menu images/Dahi papdi chaat.jpeg",
    "Tawa Chaat": "Menu images/Tawa chaat.jpeg",
    "Banarasi Tikki Chaat": "Menu images/Banarasi tikki chaat.jpeg",
    "Alu Shakarkand Chaat": "Menu images/Alu shakatkand chaat.jpeg",
    "Masti Chaat": "Menu images/Masti chaat.jpeg",
    "Dry Fruit Chaat": "Menu images/Dry fruit chaat.jpeg",
    "Kaju Masala Chaat": "Menu images/Kaju masala chaat.jpeg",
    "Rimjhim Chaat": "Menu images/Rimjhim chaat.jpeg",


    "Roasted Papad": "Menu images/Roasted Papad.jpeg",
    "Fry Papad": "Menu images/Fry Papad.jpeg",
    "Masala Papad": "Menu images/Masala Papad.jpeg",
    "Bikaner Papad": "Menu images/Bikaner Papad.jpeg",
    "Lijjat Papad": "Menu images/Lijjat Papad.jpeg",
    "Mota Masala Papad": "Menu images/Mota Masala Papad.jpeg",
    "Masala Khichiya": "Menu images/Masala Khichiya.jpeg",
    "Roasted Khichiya": "Menu images/Roasted Khichiya.jpeg",
    "Fry Masala Khichiya": "Menu images/Fry Masala Khichiya.jpeg",
    "Coins Papad": "Menu images/Coin Papad.jpeg",
    "Kurdaya": "Menu images/Kurdaya.jpeg",
    "Haldiram Fryums": "Menu images/Haldiram Fryums.jpeg", 


    "Lemon Jello Shot": "Menu images/Lemon Jello Shot.jpeg",
    "Layered Shot": "Menu images/Layered Shot.jpeg",
    "Jamun Shot": "Menu images/Jamun Shot.jpeg",
    "Strawberry with cream": "Menu images/Strawberry with cream.jpeg",
    "Bottle Shot": "Menu images/Bottle Shot.jpeg",


    "Fruit Punch Juice": "Menu images/Fruit Punch Juice.jpeg",
    "Maharaja Juice": "Menu images/Maharaja Juice.jpeg",
    "Purple Punch Juice": "Menu images/Purple Punch Juice.jpeg",
    "Bombay Bhum Juice": "Menu images/Bombay Bhum Juice.jpeg",
    "Kiwi Green Field Juice": "Menu images/Kiwi Green Field Juice.jpeg",
    "Plum Darbari Juice": "Menu images/Plum Darbari Juice.jpeg",
    "Green Colada Juice": "Menu images/Green Colada Juice.jpeg",
    "Pitch Passion Juice": "Menu images/Pitch Passion Juice.jpeg",
    "Newzealand Juice": "Menu images/New Zealand Juice.jpeg",
    "Green Tea Cooler": "Menu images/Green Tea Cooler.jpeg",
    "Black King": "Menu images/Black King.jpeg",

    
    "Red Velvet": "Menu images/Red Velvet.jpeg",
    "Orange Lemonade": "Menu images/Orange Lemonade.jpeg",
    "Frozen Mango": "Menu images/Frozen Mango.jpeg",
    "Lemonade": "Menu images/Lemonade.jpeg",
    "Strawberry Smoothie": "Menu images/Strawberry Smoothie.jpeg",
    "Strawberry Banana Smoothie": "Menu images/Strawberry Banana Smoothie.jpeg",
    "Saffron Lassi": "Menu images/Saffron Lassi.jpeg",
    "Fruity Lemonade": "Menu images/Fruity Lemonade.jpeg",
    "Green Apple Mojito": "Menu images/Green Apple Mojito.jpeg",
    "Mango Shake": "Menu images/Mango Shake.jpeg",
    "Blue Mermaid": "Menu images/Blue Mermaid.jpeg",
    "Cranberry Mojito": "Menu images/Cranberry Mojito.jpeg"
};

/* ===== DETERMINISTIC DISH IMAGE GENERATOR (SAME IMAGE THROUGHOUT THE VARIETY) ===== */
function getDishImages(dishName, categoryName) {

    console.log("Dish Name:", dishName);
    console.log("Specific Image:", dishSpecificImages[dishName]);

    if (dishSpecificImages[dishName]) {
        console.log("Using specific image:", dishSpecificImages[dishName]);
        return [dishSpecificImages[dishName]];
    }

    const pool = categoryImages[categoryName] || categoryImages['Vegetable'];

    if (!pool || pool.length === 0) {
        return [];
    }

    const index = Math.abs(
        dishName.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
    ) % pool.length;

    return [pool[index]];
}

/* ===== MENU DATABASE (dishes strictly from jay durga manu book.pdf) ===== */
const menuData = {
    'Soup': [
        { name: 'Veg of Cream', cuisine: 'Creamy soup with mixed vegetables' },
        { name: 'Veg Manchow Soup', cuisine: 'Spicy Indo-Chinese noodle soup' },
        { name: 'Lemon Coriander Soup', cuisine: 'Clear tangy broth with herbs' },
        { name: 'Thai Soup', cuisine: 'Thai aromatic coconut/herbal soup' },
        { name: 'Italian Soup', cuisine: 'Italian tomato-based herb soup' },
        { name: 'Tomato Shorba', cuisine: 'Traditional Indian spiced tomato soup' },
        { name: 'Tomato Soup', cuisine: 'Classic cream of tomato soup' },
        { name: 'Sweetcorn Soup', cuisine: 'Rich sweetcorn kernel soup' },
        { name: 'Veg Darbar Soup', cuisine: 'Chef\'s special rich vegetable soup' },
        { name: 'Veg Clear Soup', cuisine: 'Light healthy vegetable broth' },
        { name: 'Hot and Sour Soup', cuisine: 'Spicy and tangy Chinese broth' },
        { name: 'Palak Soup', cuisine: 'Cream of fresh spinach soup' }
    ],
    'Paneer Dishes': [
        { name: 'Paneer Pahadi', cuisine: 'Cottage cheese in mint-spinach green gravy' },
        { name: 'Paneer Kis Masala', cuisine: 'Grated paneer in spiced butter masala' },
        { name: 'Paneer Shahi', cuisine: 'Royal paneer in rich sweet cream gravy' },
        { name: 'Paneer Pasanda', cuisine: 'Stuffed paneer sandwiches in rich gravy' },
        { name: 'Paneer Chingari', cuisine: 'Spicy fiery paneer dish' },
        { name: 'Paneer Tikka Masala', cuisine: 'Grilled paneer in spiced tikka gravy' },
        { name: 'Paneer Kofta', cuisine: 'Paneer dumplings in aromatic sauce' },
        { name: 'Paneer Miami Kofta', cuisine: 'Rich double-layered sweet-sour paneer kofta' },
        { name: 'Paneer Patiala', cuisine: 'Paneer stuffed in papad roll in rich gravy' },
        { name: 'Paneer Sweetcorn', cuisine: 'Tender paneer chunks with sweetcorn grains' },
        { name: 'Veg Dhaniya Paneer', cuisine: 'Paneer cooked with coriander paste & spices' },
        { name: 'Paneer Mastani', cuisine: 'Rich royal paneer dish with cream & dry fruits' }
    ],
    'Sweet': [
        { name: 'Malai Matka Rabdi', cuisine: 'Traditional rich reduced milk dessert in clay pot' },
        { name: 'Matka Pista Rabdi', cuisine: 'Clay-pot rabdi flavored with rich pistachios' },
        { name: 'Badam Matka Rabdi', cuisine: 'Aromatic almond-loaded clay-pot rabdi' },
        { name: 'Kaju Matka Rabdi', cuisine: 'Cashew-loaded traditional clay-pot rabdi' },
        { name: 'Sugar Free Dry Fruit Sweet', cuisine: 'Guilt-free premium sweet made of dates & dry fruits' },
        { name: 'Badam Ice Pan', cuisine: 'Aromatic almond betel-leaf flavored dessert' },
        { name: 'Kaju Rose Ball', cuisine: 'Cashew shell filled with sweet rose gulkand' },
        { name: 'Kajucorn Mithai', cuisine: 'Unique corn-shaped cashew milk sweet' },
        { name: 'Rabdi Jalebi', cuisine: 'Crispy hot jalebis served with chilled rabdi' },
        { name: 'Anjeer Basundi', cuisine: 'Sweet thickened milk flavored with fresh figs' },
        { name: 'Bengali Rabdi', cuisine: 'Traditional Bengali style layered sweet rabdi' },
        { name: 'Ice Barfi', cuisine: 'Chilled creamy milk solid barfi' },
        { name: 'Rasmalai', cuisine: 'Soft cottage cheese patties in saffron milk' },
        { name: 'Shrikhand', cuisine: 'Traditional sweet strained cardamom yogurt' },
        { name: 'Puran Poli', cuisine: 'Sweet lentil-filled flatbread served with ghee' },
        { name: 'Pineapple Sheera', cuisine: 'Sweet semolina pudding cooked with pineapple' },
        { name: 'Kesar Dollar Jalebi', cuisine: 'Coin-sized button jalebis infused with saffron' }
    ],
    'Vegetable': [
        { name: 'Veg Banjara', cuisine: 'Mixed vegetables in spicy green spinach-mint gravy' },
        { name: 'Veg Jaipuri', cuisine: 'Mixed vegetables topped with crispy papad shreds' },
        { name: 'Veg Chingari', cuisine: 'Spicy red gravy vegetable dish' },
        { name: 'Veg Rajasthani', cuisine: 'Rajasthani style spicy curd-based vegetable curry' },
        { name: 'Veg Maratha', cuisine: 'Spicy Kolhapuri style vegetable cutlet curry' },
        { name: 'Veg Maharani', cuisine: 'Rich white-gravy mixed vegetable dish fit for royalty' },
        { name: 'Veg Chatpata', cuisine: 'Tangy, spicy mixed vegetables with bell peppers' },
        { name: 'Veg Kofta', cuisine: 'Mixed vegetable fried dumplings in medium spicy gravy' },
        { name: 'Hara Pyaz Lasun Dhaniya Veg', cuisine: 'Spring onion, garlic & fresh coriander stir fry' },
        { name: 'Veg Kolhapuri', cuisine: 'Fiery hot mixed vegetable curry with local spices' },
        { name: 'Mix Veg', cuisine: 'Classic mixed garden vegetables in dry spices' },
        { name: 'Veg Tawa Bhaji', cuisine: 'Griddle roasted spiced dry vegetables' },
        { name: 'Veg Makhanwala', cuisine: 'Vegetables in rich, sweet buttery tomato gravy' },
        { name: 'Capsicum Fry', cuisine: 'Stir fried bell peppers with gram flour & spices' },
        { name: 'Tawa Mehfil', cuisine: 'Combination of exotic tawa-grilled vegetables' },
        { name: 'Methi Malai Matar', cuisine: 'Fenugreek leaves & green peas in sweet creamy gravy' }
    ],
    'Maharashtrian': [
        { name: 'Matki Usal', cuisine: 'Sprouted moth beans cooked in authentic Maharashtrian style' },
        { name: 'Besan (Pithla)', cuisine: 'Traditional gram flour curry served hot' },
        { name: 'Bharleli Vangi', cuisine: 'Baby eggplants stuffed with peanut-coconut masala' },
        { name: 'Bhendi Masala', cuisine: 'Stir-fried okra with onions, tomatoes & spices' },
        { name: 'Akkha Masoor', cuisine: 'Whole red lentils cooked in fiery Kolhapuri style' },
        { name: 'Durga Kurma', cuisine: 'Special mild-spiced coconut-based vegetable kurma' },
        { name: 'Alu Bhendi Masala', cuisine: 'Crispy fried potatoes & okra tossed in dry spices' },
        { name: 'Chawli Usal', cuisine: 'Black-eyed peas cooked in traditional spiced gravy' },
        { name: 'Batata Sukhi Bhaji', cuisine: 'Dry yellow potatoes tempered with mustard, curry leaves' },
        { name: 'Dodka Masala', cuisine: 'Ridge gourd cooked in spicy peanut-onion paste' },
        { name: 'Gobi Watana', cuisine: 'Stir-fried cauliflower & green peas Maharashtrian style' }
    ],
    'Dal': [
        { name: 'Dal Tadka', cuisine: 'Yellow lentils tempered with garlic, cumin & red chilies' },
        { name: 'Dal Fry', cuisine: 'Yellow lentils fried with onions, tomatoes & butter' },
        { name: 'Dal Makhani', cuisine: 'Black lentils & kidney beans slow cooked with cream' },
        { name: 'Dal Maharani', cuisine: 'Rich mix of black lentils cooked in royal spices' },
        { name: 'Dal Lasuni', cuisine: 'Yellow lentils heavily tempered with burnt garlic' },
        { name: 'Gujarati Dal', cuisine: 'Sweet & sour thin lentil soup from Gujarat' },
        { name: 'Rajasthani Dal', cuisine: 'Thick, spicy dal best served with Bati' },
        { name: 'Punjabi Dal', cuisine: 'Spiced mix of chana and urad dal' },
        { name: 'Tomato Rasam', cuisine: 'Tangy South Indian lentil & tomato broth' },
        { name: 'Onion Dal Handi', cuisine: 'Lentils cooked with shallots in a clay pot' },
        { name: 'Kolhapuri Amti', cuisine: 'Spicy, tangy thin lentil soup made with Kolhapuri masala' },
        { name: 'Shevga Sheng Amti', cuisine: 'Drumstick pods cooked in spiced lentil gravy' }
    ],
    'Rice': [
        { name: 'Masala Bhaat', cuisine: 'Spiced Maharashtrian rice with vegetables' },
        { name: 'Jeera Rice', cuisine: 'Basmati rice tempered with cumin seeds & ghee' },
        { name: 'Veg Pulav', cuisine: 'Fragrant basmati rice cooked with mixed vegetables' },
        { name: 'Green Peas Pulav', cuisine: 'Mild aromatic rice with sweet green peas' },
        { name: 'Masala Pulav', cuisine: 'Spiced aromatic vegetable pulav' },
        { name: 'Ram Khichdi', cuisine: 'Rich lentil and rice porridge loaded with vegetables' },
        { name: 'Akkha Moong Khichdi', cuisine: 'Healthy whole green gram and rice khichdi' },
        { name: 'Veg Dum Biryani', cuisine: 'Layered spiced basmati rice & vegetables slow cooked' },
        { name: 'Durga Pulav', cuisine: 'Chef\'s special rich saffron and nut pulav' },
        { name: 'Veg Kaju Pulav', cuisine: 'Aromatic rice loaded with golden fried cashews' },
        { name: 'Veg Gravy Pulav', cuisine: 'Pulav served with a layer of spicy vegetable curry' },
        { name: 'Phodni Rice', cuisine: 'Traditional tempered leftover-style spiced rice' },
        { name: 'Kala Bhaat', cuisine: 'Traditional wedding style black-spice masala rice' },
        { name: 'Biryani Rice', cuisine: 'Flavorful spiced basmati rice used in biryani layering' },
        { name: 'Steam Rice', cuisine: 'Plain boiled premium long grain basmati rice' }
    ],
    'Roti': [
        { name: 'Ghee Phulka', cuisine: 'Soft, puffy whole wheat flatbread smeared with fresh ghee' },
        { name: 'Plain Puri', cuisine: 'Deep-fried puffed whole wheat bread' },
        { name: 'Masala/Palak Puri', cuisine: 'Deep-fried puri spiced or kneaded with spinach puree' },
        { name: 'Chapati', cuisine: 'Traditional thin wheat flatbread' },
        { name: 'Tawa Ghee Paratha', cuisine: 'Layered whole wheat pan-fried flatbread with ghee' },
        { name: 'Tandoori Roti', cuisine: 'Clay-oven baked whole wheat bread' },
        { name: 'Tandoori Kulcha', cuisine: 'Clay-oven baked leavened flatbread' },
        { name: 'Rumali Roti', cuisine: 'Extremely thin, large handkerchief bread' },
        { name: 'Lachha Paratha', cuisine: 'Multi-layered flaky clay-oven baked bread' },
        { name: 'Jowar/Bajra Bhakri', cuisine: 'Rustic hand-patted sorghum or pearl millet flatbread' },
        { name: 'Delhi Butter Naan', cuisine: 'Soft, leavened clay-oven bread brushed with butter' },
        { name: 'Masala Dashmi', cuisine: 'Sweet & savory spiced flatbread kneaded with milk/jaggery' }
    ],
    'Snacks': [
        { name: 'Cheese Spinach Roll', cuisine: 'Crispy fried rolls filled with cheese & spinach' },
        { name: 'Cheese Corn Ball', cuisine: 'Golden fried balls filled with cheese & sweetcorn' },
        { name: 'Kothimbir Vadi', cuisine: 'Steamed & fried coriander chickpea flour cakes' },
        { name: 'Suralichi Vadi', cuisine: 'Soft, rolled chickpea flour sheets tempered with coconut' },
        { name: 'Vegetable Roll', cuisine: 'Crispy rolls filled with seasoned sautéed vegetables' },
        { name: 'Titanic Snack', cuisine: 'Boat-shaped crispy base topped with spicy toppings' },
        { name: 'Veg Spring Roll', cuisine: 'Chinese style crispy fried vegetable wraps' },
        { name: 'Sponge Khaman', cuisine: 'Soft, fluffy steamed chickpea flour cakes with tempering' },
        { name: 'Veg Khaman', cuisine: 'Steamed savory gram flour squares' },
        { name: 'Veg Basket', cuisine: 'Crispy edible potato baskets filled with spiced veggies' },
        { name: 'Mix Pakoda', cuisine: 'Assorted deep fried vegetable fritters' },
        { name: 'Veg Kabab', cuisine: 'Grilled minced vegetable skewers' },
        { name: 'Vegetable Cutlet', cuisine: 'Deep-fried seasoned potato and veggie patties' },
        { name: 'Cheese Patties', cuisine: 'Flaky puff pastry stuffed with melted cheese' },
        { name: 'American Basket', cuisine: 'Crispy tartlets filled with creamy sweetcorn salad' },
        { name: 'Sweetcorn Patties', cuisine: 'Crispy cutlets made of mashed potato and sweetcorn' },
        { name: 'Mini Bombay Vada', cuisine: 'Bite-sized potato dumplings coated in gram flour batter' },
        { name: 'Besan Vadi', cuisine: 'Sweet gram flour fudge squares served as a snack' }
    ],
    'Raita': [
        { name: 'Boondi Raita', cuisine: 'Yogurt mixed with tiny fried chickpea flour balls' },
        { name: 'Rajasthani Raita', cuisine: 'Spicy yogurt with mustard seeds & local herbs' },
        { name: 'Fruit Raita', cuisine: 'Sweetened yogurt loaded with chopped fresh fruits' },
        { name: 'Pineapple Raita', cuisine: 'Yogurt with sweet pineapple chunks & cardamom' },
        { name: 'Veg Raita', cuisine: 'Yogurt with finely chopped onions, tomatoes & cucumber' },
        { name: 'Onion Raita', cuisine: 'Yogurt with finely sliced raw onions & green chilies' },
        { name: 'Cucumber (Kakdi) Raita', cuisine: 'Cooling yogurt with grated fresh cucumber' },
        { name: 'Mix Raita', cuisine: 'Yogurt with mixed vegetables & roasted cumin powder' },
        { name: 'Live Garam Raita', cuisine: 'Yogurt tempered live with piping hot oil, mustard, curry leaves' },
        { name: 'Kashmiri Raita', cuisine: 'Yogurt with pomegranate seeds, apples & dry fruits' },
        { name: 'Marwari Raita', cuisine: 'Spiced traditional Marwari yogurt blend' },
        { name: 'Matka Raita', cuisine: 'Clay-pot set spiced creamy thick yogurt' },
        { name: 'Jodhpuri Raita', cuisine: 'Spiced yogurt with special Jodhpuri boondi & coriander' }
    ],
    'Salad': [
        { name: 'Green Salad', cuisine: 'Slices of cucumber, carrot, tomato, onion & lemon' },
        { name: 'Onion-Beet Salad', cuisine: 'Sliced raw onions & sweet beetroot tossed together' },
        { name: 'Dahi Koshibir', cuisine: 'Traditional Maharashtrian salad with yogurt & roasted peanuts' },
        { name: 'Dalimb Koshibir', cuisine: 'Cabbage/cucumber salad topped with fresh pomegranate seeds' },
        { name: 'Pineapple Taj', cuisine: 'Sweet and tangy fresh pineapple salad decoration' },
        { name: 'Papaya Salad', cuisine: 'Tender raw papaya strips tossed with lemon & spice' },
        { name: 'Sukhi Koshibir', cuisine: 'Dry cabbage & cucumber salad seasoned with mustard seeds' },
        { name: 'Russian Salad', cuisine: 'Diced boiled vegetables bound in creamy mayonnaise' },
        { name: 'Kolhapuri Koshibir', cuisine: 'Spicy salad with green chilies, onions & lemon juice' },
        { name: 'Hot Corn Salad', cuisine: 'Warm salad of sweetcorn, bell peppers & black pepper' },
        { name: 'Tofu & Veg Salad', cuisine: 'Healthy salad with tofu cubes & assorted raw greens' },
        { name: 'Gobi Anar Salad', cuisine: 'Finely grated cabbage/cauliflower tossed with pomegranate' }
    ],
    'Chaas & Beverages': [
        { name: 'Mattha', cuisine: 'Traditional Maharashtrian spiced buttermilk' },
        { name: 'Samka Mattha', cuisine: 'Buttermilk flavored with special local ginger-mint juice' },
        { name: 'Masala Mattha', cuisine: 'Buttermilk loaded with coriander, ginger, green chili paste' },
        { name: 'Kolhapuri Mattha', cuisine: 'Extra spicy buttermilk made with Kolhapuri masalas' },
        { name: 'Boondi Mattha Solkadhi', cuisine: 'Unique digestive drink combining buttermilk, boondi, kokum' },
        { name: 'Masala Chaas', cuisine: 'Spiced refreshing North Indian buttermilk' },
        { name: 'Jeera Chaas', cuisine: 'Buttermilk flavored with roasted cumin powder' },
        { name: 'Pudina Chaas', cuisine: 'Cooling buttermilk blended with fresh mint leaves' },
        { name: 'Kothimbiri Chaas', cuisine: 'Buttermilk with loads of finely chopped coriander' },
        { name: 'Samkawali Chaas', cuisine: 'Premium spiced digestive buttermilk' },
        { name: 'Kolhapuri Tak', cuisine: 'Traditional Kolhapuri style spiced buttermilk' }
    ],
    'Italian Pasta': [
        { name: 'Bruschetta', cuisine: 'Toasted bread topped with tomatoes, garlic, basil & cheese' },
        { name: 'Cheese Pasta', cuisine: 'Pasta cooked in rich cheddar & mozzarella cheese sauce' },
        { name: 'Cream Pasta', cuisine: 'Pasta in velvety white cream sauce with herbs' },
        { name: 'Paneer Pasta', cuisine: 'Italian pasta tossed with spiced paneer cubes' },
        { name: 'Green Pasta', cuisine: 'Pasta tossed in fresh basil pesto green sauce' },
        { name: 'Megroni Pasta', cuisine: 'Fusilli/penne pasta tossed in tomato-cream pink sauce' },
        { name: 'Penne Pasta', cuisine: 'Classic penne pasta tossed in olive oil & garlic' },
        { name: 'Macaroni Pasta', cuisine: 'Macaroni elbows baked in cheese sauce' },
        { name: 'Cheese Ball Wine', cuisine: 'Crispy fried cheese balls served in gourmet wine-reduction sauce' },
        { name: 'Penne Alfredo Pasta', cuisine: 'Penne pasta in rich garlic butter parmesan sauce' },
        { name: 'Italian Red Pasta', cuisine: 'Pasta in spicy tangy marinara tomato sauce' },
        { name: 'Italian White Pasta', cuisine: 'Pasta in rich creamy béchamel sauce' }
    ],
    'Chinese': [
        { name: 'Veg Manchurian', cuisine: 'Deep fried veg balls in savory soy-garlic sauce' },
        { name: 'Schezwan Noodles', cuisine: 'Stir fried noodles tossed in fiery schezwan sauce' },
        { name: 'Schezwan Rice', cuisine: 'Stir fried basmati rice tossed in schezwan paste' },
        { name: 'Hakka Noodles', cuisine: 'Classic non-spicy vegetable stir fried noodles' },
        { name: 'Schezwan Chutney', cuisine: 'Fiery garlic-chili dip served as condiment' },
        { name: 'Paneer Manchurian', cuisine: 'Crispy paneer cubes tossed in manchurian gravy' },
        { name: 'Veg Combination', cuisine: 'Mix of fried rice and noodles served with manchurian' },
        { name: 'Veg Crispy', cuisine: 'Crispy batter-fried vegetables tossed in sweet-sour sauce' },
        { name: 'Paneer 65', cuisine: 'Spicy, deep-fried paneer chunks flavored with curry leaves' },
        { name: 'Alu 65', cuisine: 'Deep-fried spicy potato cubes flavored with South-Indian spices' },
        { name: 'Gobi Manchurian', cuisine: 'Crispy cauliflower florets in soy-garlic gravy' },
        { name: 'Manchurian Rice', cuisine: 'Fried rice served with a side of vegetable manchurian gravy' }
    ],
    'Thai Food': [
        { name: 'Thai Red Curry', cuisine: 'Vegetables simmered in spicy lemongrass red curry paste' },
        { name: 'Thai Yellow Curry', cuisine: 'Mild vegetables cooked in turmeric-coconut milk curry' },
        { name: 'Vietnamese Topaz Curry', cuisine: 'Exotic sweet-sour aromatic vegetable curry' },
        { name: 'Kapitan Curry', cuisine: 'Rich roasted coconut & chili paste curry' },
        { name: 'Pad Thai Noodles', cuisine: 'Stir-fried flat rice noodles with peanuts & bean sprouts' },
        { name: 'Thai Chili Rice', cuisine: 'Basmati rice stir fried with Thai red chilies & basil' },
        { name: 'Thai Fried Rice', cuisine: 'Aromatic jasmine/basmati fried rice with pineapple & nuts' },
        { name: 'Nasi Goreng', cuisine: 'Indonesian style sweet-spicy fried rice with sweet soy' },
        { name: 'Singapuri Charmurto', cuisine: 'Stir fried rice noodles with curry powder & vegetables' },
        { name: 'Bihun Goreng', cuisine: 'Traditional stir-fried thin rice vermicelli noodles' }
    ],
    'South Indian': [
        { name: 'Loni Dosa', cuisine: 'Thick, spongy rice crêpes cooked with loads of butter' },
        { name: 'Thatte Idli', cuisine: 'Large, flat plate-shaped extra soft steamed rice cakes' },
        { name: 'Tomato Uttappa', cuisine: 'Thick rice pancake topped with chopped tomatoes' },
        { name: 'Onion Uttappa', cuisine: 'Thick rice pancake topped with onions & green chilies' },
        { name: 'Rava Dosa', cuisine: 'Crispy, lacy crêpe made of semolina batter' },
        { name: 'Neer Dosa', cuisine: 'Paper-thin, delicate lace crêpes made of light rice batter' },
        { name: 'Chinese Dosa', cuisine: 'Dosa stuffed with Hakka-style stir fried noodles' },
        { name: 'Davangere Special Dosa', cuisine: 'Crispy butter dosa served with potato mash & coconut chutney' },
        { name: 'Masala Dosa', cuisine: 'Crispy dosa filled with spiced potato bhaji' },
        { name: 'Mysore Dosa', cuisine: 'Dosa coated inside with spicy red garlic chutney' },
        { name: 'Tomato Omelette', cuisine: 'Veg pancake made of chickpea flour, tomatoes & coriander' },
        { name: 'Paper Dosa', cuisine: 'Super thin, crispy large dosa' }
    ],
    'Delhi Chaat': [
        { name: 'Delhi Chaat', cuisine: 'Crispy potato patties topped with sweet yogurt & chutneys' },
        { name: 'Katori Papdi Chaat', cuisine: 'Edible flour bowls filled with potatoes, sprouts, chutneys' },
        { name: 'Chole Patile Chaat', cuisine: 'Spicy chickpeas tossed with onions, lemon & dry spices' },
        { name: 'Kela Papdi Chaat', cuisine: 'Crispy papdis topped with ripe banana slices & sweet yogurt' },
        { name: 'Dahi Papdi Chaat', cuisine: 'Crispy flat wheat puris topped with potatoes, yogurt, sev' },
        { name: 'Tawa Chaat', cuisine: 'Pan-fried potato slices and veggies tossed in hot spices' },
        { name: 'Banarasi Tikki Chaat', cuisine: 'Crispy potato tikkis served with hot chickpea ragda' },
        { name: 'Alu Shakarkand Chaat', cuisine: 'Boiled potatoes & sweet potatoes tossed in tangy spices' },
        { name: 'Masti Chaat', cuisine: 'Chef\'s special loaded mixed street food chat' },
        { name: 'Dry Fruit Chaat', cuisine: 'Premium mix of almonds, cashews, raisins tossed in chat masala' },
        { name: 'Kaju Masala Chaat', cuisine: 'Roasted cashew nuts tossed in spicy tangy spices' },
        { name: 'Rimjhim Chaat', cuisine: 'Crispy sev & corn mixture tossed with tangy chutneys' }
    ],
    'Papad & Kurkura': [
        { name: 'Roasted Papad', cuisine: 'Crispy dry-roasted lentil wafer' },
        { name: 'Fry Papad', cuisine: 'Deep-fried crispy lentil wafer' },
        { name: 'Masala Papad', cuisine: 'Papad topped with chopped onions, tomatoes & spice powder' },
        { name: 'Bikaner Papad', cuisine: 'Authentic spicy Bikaneri style urad dal papad' },
        { name: 'Lijjat Papad', cuisine: 'Classic pepper-spiced crispy papad' },
        { name: 'Mota Masala Papad', cuisine: 'Large spicy papad for grand buffet setups' },
        { name: 'Masala Khichiya', cuisine: 'Roasted rice papad loaded with butter, onions, tomato & sev' },
        { name: 'Roasted Khichiya', cuisine: 'Crispy dry-roasted rice flour papad' },
        { name: 'Fry Masala Khichiya', cuisine: 'Deep-fried rice papad topped with spices & vegetables' },
        { name: 'Coins Papad', cuisine: 'Bite-sized mini round papads' },
        { name: 'Kurdaya', cuisine: 'Crispy sun-dried fermented wheat string frills' },
        { name: 'Haldiram Fryums', cuisine: 'Multi-shaped colorful crispy fried starch wafers' }
    ],
    'Shots':[
        {name: 'Lemon Jello Shot', cuisine: 'A refreshing jello shot made with lemon juice and sugar'},
        {name: 'Layered Shot', cuisine: 'A layered shot made with different colors and flavors'},
        {name: 'Jamun Shot', cuisine: 'A shot made with jamun juice and sugar'},
        {name: 'Strawberry with cream', cuisine: 'A shot made with strawberry juice and cream'},
        {name: 'Bottle Shot', cuisine: 'A shot made with different flavors and colors'}
    ],
    'Juices':[
        {name: 'Fruit Punch Juice'},
        {name: 'Maharaja Juice'},
        {name: 'Purple Punch Juice'},
        {name: 'Bombay Bhum Juice'},
        {name: 'Kiwi Green Field Juice'},
        {name: 'Plum Darbari Juice'},
        {name: 'Green Colada Juice'},
        {name: 'Pitch Passion Juice'},
        {name: 'Newzealand Juice'},
        {name: 'Green Tea Cooler'},
        {name: 'Black King'}
    ],
    'Mocktail':[
        {name: 'Red Velvet'},
        {name: 'Orange Lemonade'},
        {name: 'Frozen Mango'},
        {name: 'Lemonade'},
        {name: 'Strawberry Smoothie'},
        {name: 'Strawberry Banana Smoothie'},
        {name: 'Saffron Lassi'},
        {name: 'Fruity Lemonade'},
        {name: 'Green Apple Mojito'},
        {name: 'Mango Shake'},
        {name: 'Blue Mermaid'},
        {name: 'Cranberry Mojito'}
    ]
};

/** Premium-first dish order per category (signature top, common bottom; unlisted dishes follow) */
const MENU_CATEGORY_ORDER = {
    'Soup': [
        'Veg Manchow Soup', 'Thai Soup', 'Italian Soup', 'Veg Clear Soup', 'Veg Darbar Soup', 'Hot and Sour Soup',
        'Veg of Cream', 'Lemon Coriander Soup', 'Tomato Shorba', 'Tomato Soup', 'Sweetcorn Soup', 'Palak Soup'
    ],
    'Paneer Dishes': [
        'Paneer Pahadi', 'Paneer Chingari', 'Paneer Tikka Masala', 'Paneer Patiala', 'Paneer Shahi', 'Paneer Mastani',
        'Paneer Pasanda', 'Paneer Kofta', 'Paneer Sweetcorn', 'Veg Dhaniya Paneer', 'Paneer Kis Masala', 'Paneer Miami Kofta'
    ],
    'Sweet': [
        'Malai Matka Rabdi', 'Anjeer Basundi', 'Rabdi Jalebi', 'Matka Pista Rabdi', 'Kaju Matka Rabdi', 'Kaju Rose Ball',
        'Bengali Rabdi', 'Ice Barfi', 'Sugar Free Dry Fruit Sweet', 'Badam Ice Pan', 'Kajucorn Mithai',
        'Badam Matka Rabdi', 'Rasmalai', 'Shrikhand', 'Puran Poli', 'Pineapple Sheera', 'Kesar Dollar Jalebi'
    ],
    'Vegetable': [
        'Veg Kolhapuri', 'Veg Maharani', 'Veg Maratha', 'Veg Rajasthani', 'Veg Chingari', 'Veg Banjara',
        'Mix Veg', 'Veg Tawa Bhaji', 'Veg Chatpata', 'Veg Kofta', 'Hara Pyaz Lasun Dhaniya Veg', 'Veg Jaipuri',
        'Veg Makhanwala', 'Capsicum Fry', 'Tawa Mehfil', 'Methi Malai Matar'
    ],
    'Maharashtrian': [
        'Matki Usal', 'Bharleli Vangi', 'Durga Kurma', 'Akkha Masoor', 'Chawli Usal', 'Alu Bhendi Masala',
        'Besan (Pithla)', 'Batata Sukhi Bhaji', 'Dodka Masala', 'Gobi Watana', 'Bhendi Masala'
    ],
    'Rice': [
        'Veg Dum Biryani', 'Durga Pulav', 'Veg Kaju Pulav', 'Green Peas Pulav', 'Veg Gravy Pulav', 'Masala Pulav',
        'Jeera Rice', 'Veg Pulav', 'Masala Bhaat', 'Ram Khichdi', 'Akkha Moong Khichdi', 'Phodni Rice',
        'Kala Bhaat', 'Biryani Rice', 'Steam Rice'
    ],
    'Roti': [
        'Delhi Butter Naan', 'Rumali Roti', 'Lachha Paratha', 'Tandoori Kulcha', 'Tawa Ghee Paratha', 'Jowar/Bajra Bhakri',
        'Ghee Phulka', 'Plain Puri', 'Chapati', 'Tandoori Roti', 'Masala/Palak Puri', 'Masala Dashmi'
    ],
    'Dal': [
        'Dal Maharani', 'Dal Makhani', 'Kolhapuri Amti', 'Onion Dal Handi', 'Punjabi Dal', 'Rajasthani Dal',
        'Dal Tadka', 'Dal Fry', 'Gujarati Dal', 'Tomato Rasam', 'Shevga Sheng Amti', 'Dal Lasuni'
    ],
    'Snacks': [
        'Cheese Spinach Roll', 'Cheese Corn Ball', 'Veg Kabab', 'Veg Basket', 'Veg Spring Roll', 'Vegetable Cutlet',
        'Mix Pakoda', 'Veg Khaman', 'Sponge Khaman', 'Suralichi Vadi', 'Vegetable Roll',
        'Kothimbir Vadi', 'Titanic Snack', 'Cheese Patties', 'American Basket', 'Sweetcorn Patties', 'Mini Bombay Vada', 'Besan Vadi'
    ],
    'Raita': [
        'Kashmiri Raita', 'Marwari Raita', 'Pineapple Raita', 'Fruit Raita', 'Matka Raita', 'Live Garam Raita',
        'Boondi Raita', 'Onion Raita', 'Mix Raita', 'Veg Raita', 'Cucumber (Kakdi) Raita',
        'Rajasthani Raita', 'Jodhpuri Raita'
    ],
    'Salad': [
        'Russian Salad', 'Tofu & Veg Salad', 'Gobi Anar Salad', 'Kolhapuri Koshibir', 'Hot Corn Salad', 'Green Salad',
        'Onion-Beet Salad', 'Dahi Koshibir', 'Papaya Salad', 'Sukhi Koshibir', 'Pineapple Taj', 'Dalimb Koshibir'
    ],
    'Chaas & Beverages': [
        'Kolhapuri Tak', 'Kolhapuri Mattha', 'Masala Chaas', 'Masala Mattha', 'Pudina Chaas', 'Jeera Chaas',
        'Kothimbiri Chaas', 'Samka Mattha', 'Boondi Mattha Solkadhi', 'Mattha', 'Samkawali Chaas'
    ],
    'Italian Pasta': [
        'Penne Alfredo Pasta', 'Italian Red Pasta', 'Italian White Pasta', 'Cheese Pasta', 'Green Pasta', 'Bruschetta',
        'Cream Pasta', 'Paneer Pasta', 'Macaroni Pasta', 'Cheese Ball Wine', 'Megroni Pasta', 'Penne Pasta'
    ],
    'Chinese': [
        'Veg Manchurian', 'Paneer Manchurian', 'Paneer 65', 'Gobi Manchurian', 'Schezwan Noodles', 'Schezwan Rice',
        'Hakka Noodles', 'Manchurian Rice', 'Veg Crispy', 'Veg Combination', 'Schezwan Chutney', 'Alu 65'
    ],
    'Thai Food': [
        'Thai Red Curry', 'Thai Yellow Curry', 'Pad Thai Noodles', 'Thai Chili Rice', 'Thai Fried Rice', 'Kapitan Curry',
        'Vietnamese Topaz Curry', 'Nasi Goreng', 'Singapuri Charmurto', 'Bihun Goreng'
    ],
    'South Indian': [
        'Mysore Dosa', 'Masala Dosa', 'Onion Uttappa', 'Tomato Uttappa', 'Rava Dosa', 'Davangere Special Dosa',
        'Neer Dosa', 'Paper Dosa', 'Chinese Dosa', 'Loni Dosa', 'Thatte Idli', 'Tomato Omelette'
    ],
    'Delhi Chaat': [
        'Katori Papdi Chaat', 'Banarasi Tikki Chaat', 'Dry Fruit Chaat', 'Kaju Masala Chaat', 'Dahi Papdi Chaat', 'Masti Chaat',
        'Delhi Chaat', 'Tawa Chaat', 'Chole Patile Chaat', 'Alu Shakarkand Chaat', 'Rimjhim Chaat', 'Kela Papdi Chaat'
    ],
    'Shots': [
        'Lemon Jello Shot', 'Layered Shot', 'Jamun Shot', 'Strawberry with cream', 'Bottle Shot'
    ],
    'Juices': [
        'Fruit Punch Juice', 'Maharaja Juice', 'Purple Punch Juice', 'Bombay Bhum Juice', 'Kiwi Green Field Juice',
        'Plum Darbari Juice', 'Green Colada Juice', 'Pitch Passion Juice', 'Newzealand Juice', 'Green Tea Cooler',
        'Black King'
    ],
    'Mocktail': [
        'Blue Mermaid','Cranberry Mojito','Green Apple Mojito','Red Velvet','Orange Lemonade','Frozen Mango','Lemonade','Strawberry Smoothie','Strawberry Banana Smoothie',
        'Saffron Lassi','Fruity Lemonade','Mango Shake'
    ]
};

const DISH_NAME_ALIASES = {
    'Veg Cream Soup': 'Veg of Cream',
    'Hot & Sour Soup': 'Hot and Sour Soup',
    'Sweet Corn Soup': 'Sweetcorn Soup',
    'Paneer Masala': 'Paneer Kis Masala',
    'Paneer Kismis Masala': 'Paneer Kis Masala',
    'Paneer Dhaniya': 'Veg Dhaniya Paneer',
    'Paneer Sweet Corn': 'Paneer Sweetcorn',
    'Matka Pista': 'Matka Pista Rabdi',
    'Kaju Matka': 'Kaju Matka Rabdi',
    'Kaju Rose Bowl': 'Kaju Rose Ball',
    'Ice Burfi': 'Ice Barfi',
    'Kaju Corn Mithai': 'Kajucorn Mithai',
    'Hara Pyaz Lasun Dhaniya': 'Hara Pyaz Lasun Dhaniya Veg',
    'Akkha Masur': 'Akkha Masoor',
    'Chavali Usal': 'Chawli Usal',
    'Masala Bhat': 'Masala Bhaat',
    'Fodni Rice': 'Phodni Rice',
    'Maharashtrian Chapati': 'Chapati',
    'Palak Puri': 'Masala/Palak Puri',
    'Masala Puri': 'Masala/Palak Puri',
    'Jowar Bajra Bhakri': 'Jowar/Bajra Bhakri',
    'Marwadi Raita': 'Marwari Raita',
    'Live Hot Raita': 'Live Garam Raita',
    'Beet Salad': 'Onion-Beet Salad',
    'Cucumber Koshimbir': 'Dahi Koshibir',
    'Dry Koshimbir': 'Sukhi Koshibir',
    'Kolhapuri Taak': 'Kolhapuri Tak',
    'Bundi Mattha': 'Boondi Mattha Solkadhi',
    'Solkadhi': 'Boondi Mattha Solkadhi',
    'Cheese Ball': 'Cheese Ball Wine',
    'Veg Topaz Curry': 'Vietnamese Topaz Curry',
    'Veg Thai Curry': 'Kapitan Curry',
    'Singapore Chowmein': 'Singapuri Charmurto',
    'Plain Dosa': 'Paper Dosa',
    'Idli': 'Thatte Idli',
    'Papdi Chaat': 'Delhi Chaat',
    'Chole Chaat': 'Chole Patile Chaat',
    'Aloo Chaat': 'Alu Shakarkand Chaat',
    'Rimzim Chaat': 'Rimjhim Chaat',
    'Veg Roll': 'Vegetable Roll',
    'Surali Wadi': 'Suralichi Vadi',
    'Veg Kebab': 'Veg Kabab',
    'Besan': 'Besan (Pithla)',
    'Onion Uttapam': 'Onion Uttappa',
    'Tomato Uttapam': 'Tomato Uttappa',
    'Davangere Special Dosa': 'Davangere Special Dosa'
};

function resolveMenuDishName(requestedName, dishesInCategory) {
    const trimmed = requestedName.trim();
    const alias = DISH_NAME_ALIASES[trimmed] || trimmed;
    const exact = dishesInCategory.find(d => d.name === alias);
    if (exact) return exact.name;
    const lower = alias.toLowerCase();
    const fuzzy = dishesInCategory.find(d =>
        d.name.toLowerCase() === lower ||
        d.name.toLowerCase().includes(lower) ||
        lower.includes(d.name.toLowerCase())
    );
    return fuzzy ? fuzzy.name : null;
}

function reorderMenuCategory(categoryKey, orderedNames) {
    const dishes = menuData[categoryKey];
    if (!dishes || !orderedNames) return;

    const byName = new Map(dishes.map(d => [d.name, d]));
    const reordered = [];
    const placed = new Set();

    orderedNames.forEach(requested => {
        const resolved = resolveMenuDishName(requested, dishes);
        if (resolved && byName.has(resolved) && !placed.has(resolved)) {
            reordered.push(byName.get(resolved));
            placed.add(resolved);
        }
    });

    dishes.forEach(dish => {
        if (!placed.has(dish.name)) {
            reordered.push(dish);
            placed.add(dish.name);
        }
    });

    menuData[categoryKey] = reordered;
}

Object.keys(MENU_CATEGORY_ORDER).forEach(categoryKey => {
    reorderMenuCategory(categoryKey, MENU_CATEGORY_ORDER[categoryKey]);
});

/** Category tab & display order — catering service flow (menu.html) */
const MENU_HIERARCHY = {
    'Welcome Drink': {
        subcategories: {
            'Chaas & Beverages': 'Chaas & Beverages',
            'Shots': 'Shots',
            'Juices': 'Juices',
            'Mocktail': 'Mocktail'
        }
    },
    'Starter': {
        subcategories: {
            'Thai Food': 'Thai Food',
            'Delhi Chaat': 'Delhi Chaat',
            'Snacks': 'Snacks'
        }
    },
    'South Indian':{
        key: 'South Indian'
    },
    'Italian Pasta':{
        key: 'Italian Pasta'
    },
    'Chinese':{
        key:'Chinese'
    },
    'Soup':{
        key: 'Soup'
    },
    'Sweet': {
        key: 'Sweet'
    },
    'Bhaji': {
        subcategories: {
            'Paneer': 'Paneer Dishes',
            'Vegetable': 'Vegetable',
            'Maharashtrian': 'Maharashtrian'
        }
    },
    'Roti': {
        key: 'Roti'
    },
    'Rice': {
        key: 'Rice'
    },
    'Dal': {
        key: 'Dal'
    },
    'Salad': {
        subcategories: {
            'Salad': 'Salad',
            'Raita': 'Raita'
        }
    },
    'Papad & Kurkura':{
        key:'Papad & Kurkura'
    }
};

const MAIN_CATEGORIES_DISPLAY_ORDER = [
    'Welcome Drink',
    'Starter',
    'South Indian',
    'Italian Pasta',
    'Chinese',
    'Soup',
    'Sweet',
    'Bhaji',
    'Roti',
    'Rice',
    'Dal',
    'Salad',
    'Papad & Kurkura'
];

const MENU_FLOW_SECTIONS = [
    {
        id: 'welcome-starters',
        title: 'Welcome & Starter Counters',
        emoji: '🥤',
        mainCategories: ['Welcome Drink', 'Starter']
    },
    {
        id: 'main-course',
        title: 'Main Course',
        emoji: '🥘',
        mainCategories: ['Bhaji', 'Roti', 'Rice', 'Dal']
    },
    {
        id: 'accompaniments-desserts',
        title: 'Accompaniments & Desserts',
        emoji: '🍨',
        mainCategories: ['Sweet', 'Salad']
    }
];

function getMenuCategoryKeys() {
    return MAIN_CATEGORIES_DISPLAY_ORDER;
}

function isMenuFullPage() {
    return !!document.querySelector('.menu-page-full');
}

/* ===== PREDEFINED PACKAGES DATABASE (Menus 1–8 from jay durga manu book.pdf) ===== */
const packagesData = [
    {
        id: 'menu-1',
        name: 'Menu 1',
        tag: 'Premium Regular Combo (नियमित बेत)',
        sections: {
            'welcome': ['Orange Juice', 'Pineapple Juice'],
            'sweet': ['Kaju Handi Sweet', 'Ras Madhuri'],
            'bhaji': ['Paneer Mastani', 'Veg Kolhapuri'],
            'roti': ['Tandoori Kulcha', 'Missi Roti'],
            'snacks': ['American Basket', 'Cheese Patties'],
            'rice': ['Veg Pulav', 'Jeera Rice'],
            'rice companion': ['Dal Tadka'],
            'salad': ['Green Salad'],
            'cool-cool': ['Ice Cream'],
            'chatpata': ['Khajur Chutney', 'Pudina Chutney'],
            'kurkura': ['Roasted Papad'],
            'shuddh jal': ['Mineral Water'],
            'other': ['Salt', 'Lemon', 'Pickle', 'Mukhwas']
        }
    },
    {
        id: 'menu-2',
        name: 'Menu 2',
        tag: 'Royal North Indian Special (शाही उत्तर भारतीय)',
        sections: {
            'welcome': ['Vegetable Soup', 'Tomato Paneer Soup'],
            'sweet': ['Bengali Rabdi', 'Sugar Free Dry Fruit Sweet'],
            'bhaji': ['Paneer Anguri', 'Matar Shahi'],
            'roti': ['Tandoori Roti', 'Ghee Phulka'],
            'snacks': ['Kothimbir Vadi', 'Sweetcorn Patties'],
            'rice': ['Masala Rice', 'Steam Rice'],
            'rice companion': ['Dal Fry'],
            'salad': ['Jodhpuri Raita'],
            'cool-cool': ['Ice Cream'],
            'chatpata': ['Khajur Chutney', 'Pudina Chutney'],
            'kurkura': ['Fry Papad'],
            'shuddh jal': ['Mineral Water'],
            'other': ['Salt', 'Lemon', 'Pickle', 'Mukhwas']
        }
    },
    {
        id: 'menu-3',
        name: 'Menu 3',
        tag: 'Golden Traditional Menu (सुवर्ण पारंपरिक बेत)',
        sections: {
            'sweet': ['Kesar Dollar Jalebi', 'Anjeer Basundi'],
            'bhaji': ['Paneer Tikka Masala', 'Bhendi Fry'],
            'roti': ['Ghee Phulka', 'Plain Puri'],
            'snacks': ['Vegetable Cutlet', 'Mix Pakoda'],
            'rice': ['Jeera Rice', 'Steam Rice'],
            'rice companion': ['Dal Tadka'],
            'salad': ['Green Salad'],
            'chatpata': ['Khajur Chutney', 'Pudina Chutney'],
            'kurkura': ['Roasted Papad'],
            'shuddh jal': ['Mineral Water'],
            'other': ['Salt', 'Lemon', 'Pickle', 'Mouth Freshener/Pan']
        }
    },
    {
        id: 'menu-4',
        name: 'Menu 4',
        tag: 'Spicy Punjabi-Marathi Fusion (झणझणीत जुगलबंदी)',
        sections: {
            'sweet': ['Anjeer Basundi'],
            'bhaji': ['Punjabi Bhaji', 'Matki Usal'],
            'roti': ['Plain Puri'],
            'snacks': ['Mini Bombay Vada'],
            'rice': ['Masala Bhaat'],
            'rice companion': ['Kolhapuri Amti'],
            'salad': ['Dahi Koshibir'],
            'chatpata': ['Khajur Chutney', 'Pudina Chutney'],
            'kurkura': ['Lijjat Papad'],
            'shuddh jal': ['Mineral Water'],
            'other': ['Salt', 'Lemon', 'Pickle', 'Mukhwas'],
            'jata-jata': ['Mouth Freshener/Pan']
        }
    },
    {
        id: 'menu-5',
        name: 'Menu 5',
        tag: 'Purnanna Maharashtrian Feast (पूर्णान्न महाराष्ट्र भोजन)',
        sections: {
            'purnanna': ['Varan Bhaat with Pure Ghee'],
            'sweet': ['Pineapple Sheera'],
            'bhaji': ['Kurma Matki Usal'],
            'roti': ['Plain Puri'],
            'rice': ['Masala Bhaat'],
            'rice companion': ['Kolhapuri Amti'],
            'salad': ['Dahi Koshibir'],
            'chatpata': ['Khajur Chutney', 'Pudina Chutney'],
            'kurkura': ['Kurdaya'],
            'shuddh jal': ['Mineral Water'],
            'other': ['Salt', 'Lemon', 'Pickle', 'Mukhwas'],
            'jata-jata': ['Mouth Freshener/Pan']
        }
    },
    {
        id: 'menu-6',
        name: 'Menu 6',
        tag: 'Shrikhand Special Maharashtrian (श्रीखंड विशेष थाळी)',
        sections: {
            'sweet': ['Shrikhand'],
            'bhaji': ['Kurma Matki Usal'],
            'roti': ['Plain Puri'],
            'snacks': ['Kanda Bhaji'],
            'rice': ['Masala Bhaat'],
            'rice companion': ['Kolhapuri Amti'],
            'salad': ['Maharashtrian Koshibir'],
            'chatpata': ['Khajur Chutney', 'Pudina Chutney'],
            'kurkura': ['Roasted Papad'],
            'shuddh jal': ['Mineral Water'],
            'other': ['Salt', 'Lemon', 'Pickle', 'Mukhwas'],
            'jata-jata': ['Mouth Freshener/Pan']
        }
    },
    {
        id: 'menu-7',
        name: 'Menu 7',
        tag: 'Puran Poli Shahi Feast (पुरणपोळी शाही थाळी)',
        sections: {
            'purnanna': ['Varan Bhaat with Pure Ghee'],
            'sweet': ['Puran Poli served with Milk'],
            'bhaji': ['Batata Sukhi Bhaji', 'Bharleli Vangi'],
            'roti': ['Chapati'],
            'snacks': ['Besan Vadi'],
            'rice': ['Kala Bhaat'],
            'rice companion': ['Kolhapuri Amti'],
            'salad': ['Dahi Koshibir'],
            'chatpata': ['Two Types of Chutneys'],
            'kurkura': ['Kurdaya'],
            'shuddh jal': ['Mineral Water'],
            'other': ['Salt', 'Lemon', 'Pickle', 'Mukhwas'],
            'jata-jata': ['Mouth Freshener/Pan']
        }
    },
    {
        id: 'menu-8',
        name: 'Menu 8',
        tag: 'Exotic Banquet Combination (शाही मेजवानी)',
        sections: {
            'sweet': ['Rasmalai'],
            'bhaji': ['Veg Makhanwala', 'Capsicum Fry'],
            'roti': ['Chapati', 'Plain Puri'],
            'snacks': ['Vegetable Cutlet'],
            'rice': ['Biryani Rice'],
            'rice companion': ['Tomato Rasam'],
            'salad': ['Koshibir Salad'],
            'chatpata': ['Khajur Chutney', 'Pudina Chutney'],
            'kurkura': ['Mix Fryums'],
            'shuddh jal': ['Mineral Water'],
            'other': ['Salt', 'Lemon', 'Pickle', 'Mukhwas'],
            'jata-jata': ['Mouth Freshener/Pan']
        }
    }
];

/** Home page preview — Menu 1, 2, 3 in order (from menu book only) */
const HOME_FEATURED_PACKAGE_IDS = ['menu-1', 'menu-2', 'menu-3'];

const packageSectionMeta = [
    { id: 'traditional', title: 'Traditional Maharashtrian Functions', subtitle: 'Authentic पूर्णान्न, पुरणपोळी & regional delicacies', icon: 'fa-om' },
    { id: 'corporate', title: 'Corporate Catering', subtitle: 'Professional buffet service for offices & business events', icon: 'fa-briefcase' },
    { id: 'birthday', title: 'Birthday & Reception Events', subtitle: 'Memorable spreads for receptions, birthdays & social gatherings', icon: 'fa-cake-candles' },
    { id: 'custom', title: 'Custom Event Packages', subtitle: 'Flexible curated menus tailored to your occasion', icon: 'fa-wand-magic-sparkles' }
];

const packageMetaById = {
    'menu-1': {
        categories: ['corporate', 'custom'],
        description: 'A balanced premium combo with welcome drinks, sweets, mains, snacks, and complete accompaniments.',
        icon: 'fa-utensils',
        services: ['Welcome Juices', 'Main Course Buffet', 'Snacks & Sweets', 'Full Accompaniments']
    },
    'menu-2': {
        categories: ['corporate'],
        description: 'Royal North Indian flavours with soups, paneer specialties, and elegant buffet service.',
        icon: 'fa-building',
        services: ['Soup Counter', 'Paneer & Veg Mains', 'Rice & Dal', 'Dessert Service']
    },
    'menu-3': {
        categories: ['birthday'],
        description: 'Golden traditional menu with jalebi, basundi, and classic Maharashtrian favourites.',
        icon: 'fa-gift',
        services: ['Traditional Sweets', 'Paneer & Bhaji', 'Rice & Roti', 'Chutneys & Papad']
    },
    'menu-4': {
        categories: ['birthday'],
        description: 'Spicy Punjabi–Marathi fusion thali with bold flavours and festive presentation.',
        icon: 'fa-champagne-glasses',
        services: ['Fusion Mains', 'Puri & Snacks', 'Kolhapuri Amti', 'Salad & Chutney']
    },
    'menu-5': {
        categories: ['traditional'],
        description: 'Complete पूर्णान्न Maharashtrian feast with varan bhaat, puran poli essentials & regional sides.',
        icon: 'fa-om',
        services: ['Varan Bhaat', 'Maharashtrian Bhaji', 'Puri & Rice', 'Traditional Accompaniments']
    },
    'menu-6': {
        categories: ['traditional'],
        description: 'Shrikhand-special Maharashtrian thali with classic usal, bhaat, and festive sides.',
        icon: 'fa-bowl-food',
        services: ['Shrikhand', 'Matki Usal', 'Masala Bhaat', 'Koshibir & Papad']
    },
    'menu-7': {
        categories: ['traditional'],
        description: 'Puran Poli shahī feast — the crown jewel of Maharashtrian celebration dining.',
        icon: 'fa-star',
        services: ['Puran Poli with Milk', 'Varan Bhaat', 'Bharleli Vangi', 'Full Festive Spread']
    },
    'menu-8': {
        categories: ['birthday', 'custom'],
        description: 'Exotic banquet combination with biryani rice, makhanwala, and premium dessert service.',
        icon: 'fa-crown',
        services: ['Biryani Rice', 'Exotic Mains', 'Cutlets & Puri', 'Rasmalai Dessert']
    }
};

packagesData.forEach(pkg => {
    const meta = packageMetaById[pkg.id] || {};
    Object.assign(pkg, {
        categories: meta.categories || ['custom'],
        description: meta.description || pkg.tag,
        icon: meta.icon || 'fa-utensils',
        services: meta.services || []
    });
});

/* ===== STATE MANAGEMENT (Customizable Menu Builder) ===== */
const CUSTOM_MENU_STORAGE_KEY = 'jayDurgaCustomMenu';
let selectedDishes = new Set();

function loadCustomMenuFromStorage() {
    try {
        const stored = localStorage.getItem(CUSTOM_MENU_STORAGE_KEY);
        if (!stored) return;
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
            selectedDishes = new Set(parsed);
        }
    } catch (err) {
        console.warn('Could not load custom menu from storage', err);
    }
}

function saveCustomMenuToStorage() {
    try {
        localStorage.setItem(CUSTOM_MENU_STORAGE_KEY, JSON.stringify([...selectedDishes]));
    } catch (err) {
        console.warn('Could not save custom menu to storage', err);
    }
}

/* ===== HOME PAGE — FEATURED MENU PREVIEW ===== */
const featuredMenuDishes = [
    { name: 'Puran Poli', categoryName: 'Sweet', hero: true },
    { name: 'Paneer Tikka Masala', categoryName: 'Paneer Dishes' },
    { name: 'Loni Dosa', categoryName: 'South Indian' },
    { name: 'Veg Kolhapuri', categoryName: 'Vegetable' },
    { name: 'Dal Fry', categoryName: 'Dal' }
];

/* ===== HERO ARC BANDS — segmented rotating tracks (right column only) ===== */
const HERO_ARC_BANDS = [
    {
        type: 'outer',
        images: [
            { src: "Menu images/Paper dosa.jpeg", alt: 'Paper Dosa' },
            { src: 'Menu images/Paneer Tikka Masala.jpeg', alt: 'Paneer Tikka Masala' },
            { src: 'Menu images/Veg Kolhapuri.jpeg', alt: 'Veg Kolhapuri' },
            { src: 'Menu images/Cheese pasta.jpeg', alt: 'Cheese Pasta' },
            { src: 'Menu images/veg Spring Roll.jpeg', alt: 'Veg Spring Roll' },
            { src: 'Menu images/Hakkk Noodles.jpeg', alt: 'Hakka Noodles' },
            { src: 'Menu images/Paneer Pahadi.jpeg', alt: 'Paneer Pahadi' },
            { src: 'Menu images/Davangiri dosa.jpeg', alt: 'Davangiri Dosa' }
        ]
    },
    {
        type: 'inner',
        images: [
            { src: 'Menu images/Biryani Rice.jpeg', alt: 'Biryani Rice' },
            { src: 'Menu images/puran poli.jpeg', alt: 'Puran Poli' },
            { src: 'Menu images/sweet corn soup.jpeg', alt: 'Sweet Corn Soup' },
            { src: 'Menu images/dahi koshimbir.jpeg', alt: 'Dahi Koshibir' },
            { src: 'Menu images/sponge khaman.jpeg', alt: 'Sponge Khaman' },
            { src: 'Menu images/Gobi Manchurian.jpeg', alt: 'Gobi Manchurian' },
            { src: 'Menu images/Veg Pulav.jpeg', alt: 'Veg Pulav' },
            { src: 'Menu images/Kaju Roll.jpeg', alt: 'Kaju Roll' }
        ]
    }
];

function initCulinaryShowcase() {
    const root = document.getElementById('heroShowcaseOrbit');
    if (!root || root.dataset.built === 'true') return;

    const viewport = document.createElement('div');
    viewport.className = 'hero-arc-bands__viewport';

    const pivot = document.createElement('div');
    pivot.className = 'hero-arc-bands__pivot';

    HERO_ARC_BANDS.forEach(band => buildHeroArcBand(pivot, band.type, band.images));

    viewport.appendChild(pivot);
    root.appendChild(viewport);
    root.dataset.built = 'true';
}

function buildHeroArcBand(pivot, bandType, images) {
    const band = document.createElement('div');
    band.className = `hero-band hero-band--${bandType}`;

    const count = images.length;
    const step = 360 / count;
    const gap = 2.4;
    const fill = step - gap;

    band.style.setProperty('--seg-step', `${step}deg`);
    band.style.setProperty('--seg-fill', `${fill}deg`);

    const rotator = document.createElement('div');
    rotator.className = 'hero-band__rotator';

    const track = document.createElement('div');
    track.className = 'hero-band__track-ring';
    track.setAttribute('aria-hidden', 'true');
    rotator.appendChild(track);

    images.forEach((item, index) => {
        const segment = document.createElement('div');
        segment.className = 'hero-band__segment';
        segment.style.setProperty('--i', index);

        const media = document.createElement('div');
        media.className = 'hero-band__segment-media';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.loading = index === 0 && bandType === 'outer' ? 'eager' : 'lazy';
        if (index === 0 && bandType === 'outer') img.fetchPriority = 'high';
        img.decoding = 'async';
        img.width = 400;
        img.height = 400;
        img.draggable = false;

        media.appendChild(img);
        segment.appendChild(media);
        rotator.appendChild(segment);
    });

    band.appendChild(rotator);
    pivot.appendChild(band);
}

/* ===== DOM CONTENT LOADED INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
    loadCustomMenuFromStorage();

    // 1. Navigation Actions & Mobile Drawer
    initNavigation();

    // 2. Parallax Hero Slider (home page only)
    initHeroSlider();

    // 2b. Hero orbital food showcase
    initCulinaryShowcase();

    // 3. Full menu (menu.html) or featured preview (index.html)
    if (document.getElementById('menuGrid')) {
        initInteractiveMenu();
    }
    if (document.getElementById('featuredMenuGrid')) {
        initFeaturedMenuPreview();
    }

    // 4. Render Catering Packages (index preview + packages.html)
    if (document.getElementById('featuredPackagesGrid') || document.getElementById('packagesPageContent')) {
        initPackages();
    }

    // 5. Render Customizable Menu Checkbox panels
    initCustomMenuBuilder();
    syncMenuStateToUI();

    // 6. Gallery preview (index) and full gallery page (gallery.html)
    if (document.getElementById('featuredGalleryGrid') || document.getElementById('galleryPageContent')) {
        initGallery();
    }

    // 7. Testimonials Carousel
    initTestimonials();

    // 8. Contact Form Validator & WhatsApp Sender
    initContactForm();

    // 9. Floating Widgets (WhatsApp & Scroll-to-Top)
    initFloatingWidgets();

    // 10. Scroll Reveals
    initScrollReveals();
});

/* ===== 1. NAVIGATION CONTROL ===== */
function initNavigation() {
    const header = document.querySelector('.header-nav');
    const menuTrigger = document.getElementById('menuTrigger');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Check scroll state immediately on load
    handleScroll();

    // Sticky shadow on scroll
    window.addEventListener('scroll', handleScroll);

    // Mobile Hamburger Toggle
    if (menuTrigger && mobileNav) {
        menuTrigger.addEventListener('click', () => {
            menuTrigger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('nav-open', mobileNav.classList.contains('active'));
        });
    }

    // Close mobile nav on links click
    const closeMobileNav = () => {
        if (menuTrigger) menuTrigger.classList.remove('active');
        if (mobileNav) mobileNav.classList.remove('active');
        document.body.classList.remove('nav-open');
    };

    if (mobileLinks.length) {
        mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));
    }

    // Active Section Link Tracker (single-page sections only)
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', reveal);

    function reveal() {
        let reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {

            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 100;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    };
}

/* ===== 2. HERO PARALLAX SLIDER ===== */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds per slide (matches kenBurns feel)

    const activateSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            if (i !== index) {
                slide.style.animation = 'none';
            }
        });
        const active = slides[index];
        void active.offsetWidth; // restart cross-fade + ken burns on each change
        active.style.animation = '';
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        activateSlide(currentSlide);
    };

    activateSlide(0);
    setInterval(nextSlide, slideInterval);
}

/* ===== 3. INTERACTIVE CATEGORIZED MENU ===== */
function initInteractiveMenu() {
    const tabsContainer = document.getElementById('menuTabs');
    const gridContainer = document.getElementById('menuGrid');
    if (!tabsContainer || !gridContainer) return;

    const categories = MAIN_CATEGORIES_DISPLAY_ORDER;

    // Add "All" option to categories
    const allCategories = ['all', ...categories];

    // Render category buttons
    allCategories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `menu-tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = cat;
        btn.dataset.category = cat;
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenuCards(cat);
        });
        tabsContainer.appendChild(btn);
    });

    // Render first category ("All")
    renderMenuCards('all');
}

function createDishCardElement(dish, categoryName, idx = 0) {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.style.animationDelay = `${idx * 0.03}s`;

    const images = getDishImages(dish.name, categoryName);
    const isSelected = selectedDishes.has(dish.name);

    let imageSlidesHTML = '';
    images.forEach((imgSrc, imgIdx) => {
        imageSlidesHTML += `<img src="${imgSrc}" alt="${dish.name}" class="dish-img-slide ${imgIdx === 0 ? 'active' : ''}">`;
    });

    const safeName = dish.name.replace(/'/g, "\\'");
    const safeCategory = categoryName.replace(/'/g, "\\'");

    card.innerHTML = `
        <div class="dish-media-container">
            <span class="dish-cat-tag">${categoryName}</span>
            ${imageSlidesHTML}
        </div>
        <div class="dish-details">
            <h3 class="dish-title">${dish.name}</h3>
            <p class="dish-cuisine">${dish.cuisine}</p>
            <div class="dish-actions">
                <button class="add-custom-btn ${isSelected ? 'selected' : ''}" 
                        onclick="toggleDishSelection(this, '${safeName}', '${safeCategory}')">
                    ${isSelected ? 'Selected' : 'Add to Custom Menu'}
                </button>
            </div>
        </div>
    `;

    setupCardImageHoverRotation(card);
    return card;
}

function initFeaturedMenuPreview() {
    const gridContainer = document.getElementById('featuredMenuGrid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    featuredMenuDishes.forEach((item, idx) => {
        const categoryDishes = menuData[item.categoryName];
        if (!categoryDishes) return;

        const dish = categoryDishes.find(d => d.name === item.name);
        if (!dish) return;

        const card = createDishCardElement(dish, item.categoryName, idx);
        if (item.hero || idx === 0) {
            card.classList.add('featured-dish-hero');
        } else {
            card.classList.add('featured-dish-small');
        }
        gridContainer.appendChild(card);
    });
}

function renderMenuFlowLayout(container) {
    container.innerHTML = '';
    container.classList.add('menu-grid--flow');
    let cardIdx = 0;

    MENU_FLOW_SECTIONS.forEach(section => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'menu-flow-section reveal';
        sectionEl.innerHTML = `
            <div class="menu-flow-section-header">
                <h2 class="menu-flow-section-title">
                    <span class="menu-flow-emoji" aria-hidden="true">${section.emoji}</span>
                    ${section.title}
                </h2>
                <div class="section-underline menu-flow-underline"></div>
            </div>
        `;

        section.mainCategories.forEach(mainCat => {
            const config = MENU_HIERARCHY[mainCat];
            if (!config) return;

            if (config.subcategories) {
                Object.keys(config.subcategories).forEach(subCatName => {
                    const menuDataKey = config.subcategories[subCatName];
                    if (!menuDataKey) return;

                    const dishes = menuData[menuDataKey];
                    if (!dishes || dishes.length === 0) return;

                    const block = document.createElement('div');
                    block.className = 'menu-category-block';
                    block.innerHTML = `<h3 class="menu-category-heading">${subCatName}</h3>`;

                    const grid = document.createElement('div');
                    grid.className = 'menu-grid menu-grid--nested';

                    dishes.forEach(dish => {
                        grid.appendChild(createDishCardElement(dish, menuDataKey, cardIdx));
                        cardIdx += 1;
                    });

                    block.appendChild(grid);
                    sectionEl.appendChild(block);
                });
            } else {
                const menuDataKey = config.key;
                const dishes = menuData[menuDataKey];
                if (!dishes || dishes.length === 0) return;

                const block = document.createElement('div');
                block.className = 'menu-category-block';
                block.innerHTML = `<h3 class="menu-category-heading">${mainCat}</h3>`;

                const grid = document.createElement('div');
                grid.className = 'menu-grid menu-grid--nested';

                dishes.forEach(dish => {
                    grid.appendChild(createDishCardElement(dish, menuDataKey, cardIdx));
                    cardIdx += 1;
                });

                block.appendChild(grid);
                sectionEl.appendChild(block);
            }
        });

        container.appendChild(sectionEl);
    });

    setTimeout(() => window.dispatchEvent(new Event('scroll')), 80);
}

function renderMenuCards(category) {
    const gridContainer = document.getElementById('menuGrid');
    if (!gridContainer) return;

    gridContainer.style.opacity = '0';

    setTimeout(() => {
        gridContainer.innerHTML = '';
        gridContainer.classList.remove('menu-grid--flow');

        if (category === 'all' && isMenuFullPage()) {
            renderMenuFlowLayout(gridContainer);
            gridContainer.style.opacity = '1';
            return;
        }

        if (category === 'all') {
            let cardIdx = 0;
            MAIN_CATEGORIES_DISPLAY_ORDER.forEach(mainCat => {
                const config = MENU_HIERARCHY[mainCat];
                if (!config) return;
                if (config.subcategories) {
                    Object.keys(config.subcategories).forEach(subCat => {
                        const menuDataKey = config.subcategories[subCat];
                        if (menuDataKey && menuData[menuDataKey]) {
                            menuData[menuDataKey].forEach(dish => {
                                gridContainer.appendChild(createDishCardElement(dish, menuDataKey, cardIdx));
                                cardIdx += 1;
                            });
                        }
                    });
                } else {
                    const menuDataKey = config.key;
                    if (menuData[menuDataKey]) {
                        menuData[menuDataKey].forEach(dish => {
                            gridContainer.appendChild(createDishCardElement(dish, menuDataKey, cardIdx));
                            cardIdx += 1;
                        });
                    }
                }
            });
            gridContainer.style.opacity = '1';
            return;
        }

        const config = MENU_HIERARCHY[category];
        if (!config) return;

        if (config.subcategories) {
            gridContainer.classList.add('menu-grid--flow');
        
            const nav = document.createElement('div');
            nav.className = 'subcategory-nav';
        
            const content = document.createElement('div');
            content.className = 'subcategory-content';
        
            gridContainer.appendChild(nav);
            gridContainer.appendChild(content);
        
            let firstButton = null;
        
            Object.keys(config.subcategories).forEach(subCatName => {
        
                const menuDataKey = config.subcategories[subCatName];
                if (!menuDataKey) return;
        
                const dishes = menuData[menuDataKey];
                if (!dishes || dishes.length === 0) return;
        
                const btn = document.createElement('button');
                btn.className = 'menu-subcategory-btn';
                btn.textContent = subCatName;
        
                nav.appendChild(btn);
        
                btn.addEventListener('click', () => {
        
                    document
                        .querySelectorAll('.menu-subcategory-btn')
                        .forEach(b => b.classList.remove('active'));
        
                    btn.classList.add('active');
        
                    content.innerHTML = '';
        
                    const grid = document.createElement('div');
                    grid.className = 'menu-grid menu-grid--nested';
        
                    dishes.forEach((dish, idx) => {
                        grid.appendChild(
                            createDishCardElement(
                                dish,
                                menuDataKey,
                                idx
                            )
                        );
                    });
        
                    content.appendChild(grid);
                });
        
                if (!firstButton) {
                    firstButton = btn;
                }
            });
        
            if (firstButton) {
                firstButton.click();
            }
        } {
            const menuDataKey = config.key;
            const dishes = menuData[menuDataKey];
            if (dishes) {
                dishes.forEach((dish, idx) => {
                    gridContainer.appendChild(createDishCardElement(dish, menuDataKey, idx));
                });
            }
        }

        gridContainer.style.opacity = '1';
    }, 200);
}

// Function to handle changing images when card is hovered (slideshow effect)
function setupCardImageHoverRotation(card) {
    const mediaContainer = card.querySelector('.dish-media-container');
    const slides = card.querySelectorAll('.dish-img-slide');
    if (slides.length <= 1) return;

    let rotationInterval = null;
    let activeIdx = 0;

    mediaContainer.addEventListener('mouseenter', () => {
        rotationInterval = setInterval(() => {
            slides[activeIdx].classList.remove('active');
            activeIdx = (activeIdx + 1) % slides.length;
            slides[activeIdx].classList.add('active');
        }, 1500); // changes every 1.5 seconds on hover
    });

    mediaContainer.addEventListener('mouseleave', () => {
        clearInterval(rotationInterval);
        // Reset to first slide
        slides.forEach((slide, idx) => {
            if (idx === 0) slide.classList.add('active');
            else slide.classList.remove('active');
        });
        activeIdx = 0;
    });
}

/* ===== 4. PRE-DESIGNED CATERING PACKAGES ===== */
function createPackageCard(pkg) {
    const card = document.createElement('article');
    card.className = 'package-card reveal';

    let accordionHTML = '';
    Object.keys(pkg.sections).forEach((sectionName) => {
        const items = pkg.sections[sectionName];
        accordionHTML += `
            <div class="package-accordion">
                <button type="button" class="accordion-header" onclick="toggleAccordion(this)">
                    <span>${sectionName}</span>
                    <span class="accordion-icon"><i class="fas fa-chevron-down"></i></span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        ${items.map(item => `
                            <div class="accordion-item-bullet">
                                <i class="fas fa-check-circle"></i>
                                <span>${item}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    const servicesHTML = (pkg.services || []).map(s => `
        <span class="package-service-chip"><i class="fas fa-check"></i> ${s}</span>
    `).join('');

    card.innerHTML = `
        <div class="package-banner">
            <div class="package-banner-icon"><i class="fas ${pkg.icon}"></i></div>
            <span class="package-tag">${pkg.tag}</span>
            <h3 class="package-title">${pkg.name}</h3>
        </div>
        <div class="package-body">
            <p class="package-desc">${pkg.description}</p>
            ${servicesHTML ? `<div class="package-services">${servicesHTML}</div>` : ''}
            <div class="package-accordions">
                ${accordionHTML}
            </div>
            <div class="package-footer">
                <button type="button" class="import-package-btn" onclick="importPackageToCustom('${pkg.id}')">
                    <i class="fas fa-file-import"></i> Import to Custom Menu
                </button>
            </div>
        </div>
    `;

    return card;
}

function initPackages() {
    const featuredGrid = document.getElementById('featuredPackagesGrid');
    const pageContent = document.getElementById('packagesPageContent');

    if (featuredGrid) {
        HOME_FEATURED_PACKAGE_IDS.forEach(id => {
            const pkg = packagesData.find(p => p.id === id);
            if (pkg) featuredGrid.appendChild(createPackageCard(pkg));
        });
        setTimeout(() => window.dispatchEvent(new Event('scroll')), 80);
    }

    if (pageContent) {
        initPackagesPage(pageContent);
    }
}

function initPackagesPage(wrapper) {
    wrapper.innerHTML = '';

    packageSectionMeta.forEach(section => {
        const sectionPackages = packagesData.filter(p => p.categories.includes(section.id));
        if (sectionPackages.length === 0) return;

        const block = document.createElement('div');
        block.className = 'packages-section-block reveal';
        block.innerHTML = `
            <div class="packages-section-header">
                <div class="packages-section-icon"><i class="fas ${section.icon}"></i></div>
                <div>
                    <h3 class="packages-section-heading">${section.title}</h3>
                    <p class="packages-section-sub">${section.subtitle}</p>
                </div>
            </div>
            <div class="section-underline" style="margin: 1rem 0 0;"></div>
        `;

        const grid = document.createElement('div');
        grid.className = 'packages-grid';
        sectionPackages.forEach(pkg => grid.appendChild(createPackageCard(pkg)));
        block.appendChild(grid);
        wrapper.appendChild(block);
    });

    setTimeout(() => window.dispatchEvent(new Event('scroll')), 80);
}

function toggleAccordion(button) {
    const accordion = button.parentElement;
    const content = button.nextElementSibling;
    const isOpen = accordion.classList.contains('active');

    // Close all other accordions inside the same package
    const siblings = accordion.parentElement.querySelectorAll('.package-accordion');
    siblings.forEach(sib => {
        sib.classList.remove('active');
        sib.querySelector('.accordion-content').style.maxHeight = null;
    });

    if (!isOpen) {
        accordion.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function importPackageToCustom(packageId) {
    const pkg = packagesData.find(p => p.id === packageId);
    if (!pkg) return;

    // Reset current custom selections
    selectedDishes.clear();

    // Iterate sections and match dishes
    Object.keys(pkg.sections).forEach(section => {
        pkg.sections[section].forEach(itemName => {
            // Find base dish matching this name (or custom add it)
            // Remove garnish qualifiers if necessary, but try to match
            let matchedDish = null;
            let cleanItemName = itemName.replace(' Sweet', '').replace(' served with Milk', '').replace(' with Pure Ghee', '').trim();

            // Search inside menuData
            Object.keys(menuData).forEach(cat => {
                const dish = menuData[cat].find(d => d.name.toLowerCase().includes(cleanItemName.toLowerCase()) || cleanItemName.toLowerCase().includes(d.name.toLowerCase()));
                if (dish) {
                    matchedDish = { name: dish.name, category: cat };
                }
            });

            if (matchedDish) {
                selectedDishes.add(matchedDish.name);
            } else {
                // If it's a specific set item (e.g. stalls or other essentials), we can add it as generic
                selectedDishes.add(itemName);
            }
        });
    });

    saveCustomMenuToStorage();
    syncMenuStateToUI();

    showToastNotification(`Successfully loaded items from ${pkg.name} into your Custom Menu!`);

    const target = document.getElementById('custom');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'index.html#custom';
    }
}

/* ===== 5. CUSTOMIZABLE MENU BUILDER ===== */
function initCustomMenuBuilder() {
    const container = document.getElementById('customCategories');
    if (!container) return;

    MAIN_CATEGORIES_DISPLAY_ORDER.forEach(mainCategory => {
        const config = MENU_HIERARCHY[mainCategory];
        if (!config) return;

        const card = document.createElement('div');
        card.className = 'builder-group-card reveal';

        if (config.subcategories) {
            let totalItems = 0;
            Object.keys(config.subcategories).forEach(subCat => {
                const key = config.subcategories[subCat];
                if (key && menuData[key]) totalItems += menuData[key].length;
            });

            card.innerHTML = `
                <div class="builder-group-header">
                    <span>${mainCategory}</span>
                    <span class="builder-group-badge">${totalItems} Items</span>
                </div>
                <div class="builder-group-body" style="display: block;">
                    ${Object.keys(config.subcategories).map(subCat => {
                        const key = config.subcategories[subCat];
                        if (!key || !menuData[key] || menuData[key].length === 0) return '';

                        const dishes = menuData[key];
                        return `
                            <div class="builder-subcategory-section" style="margin-bottom: 1.5rem; width: 100%;">
                                <h4 class="builder-subcategory-heading" style="font-size: 0.95rem; font-weight: 800; color: var(--primary-red); margin-bottom: 0.75rem; text-transform: uppercase; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.25rem;">${subCat}</h4>
                                <div class="builder-subcategory-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.25rem;">
                                    ${dishes.map(dish => {
                                        const dishId = `chk-${key.replace(/\s+/g, '-')}-${dish.name.replace(/\s+/g, '-')}`;
                                        return `
                                            <label class="checkbox-card" id="lbl-${dishId}">
                                                <input type="checkbox" id="${dishId}" value="${dish.name}" data-category="${key}" onchange="handleCheckboxChange(this)">
                                                <span class="checkbox-custom"></span>
                                                <span>${dish.name}</span>
                                            </label>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else {
            const key = config.key;
            const dishes = menuData[key] || [];

            card.innerHTML = `
                <div class="builder-group-header">
                    <span>${mainCategory}</span>
                    <span class="builder-group-badge">${dishes.length} Items</span>
                </div>
                <div class="builder-group-body">
                    ${dishes.map(dish => {
                        const dishId = `chk-${key.replace(/\s+/g, '-')}-${dish.name.replace(/\s+/g, '-')}`;
                        return `
                            <label class="checkbox-card" id="lbl-${dishId}">
                                <input type="checkbox" id="${dishId}" value="${dish.name}" data-category="${key}" onchange="handleCheckboxChange(this)">
                                <span class="checkbox-custom"></span>
                                <span>${dish.name}</span>
                            </label>
                        `;
                    }).join('')}
                </div>
            `;
        }

        container.appendChild(card);
    });

    // Setup clear trigger
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            selectedDishes.clear();
            saveCustomMenuToStorage();
            syncMenuStateToUI();
        });
    }
}

function handleCheckboxChange(checkbox) {
    const dishName = checkbox.value;
    const parentLabel = document.getElementById(`lbl-${checkbox.id}`);

    if (checkbox.checked) {
        selectedDishes.add(dishName);
        if (parentLabel) parentLabel.classList.add('selected');
    } else {
        selectedDishes.delete(dishName);
        if (parentLabel) parentLabel.classList.remove('selected');
    }

    syncMenuStateToUI();
}

// Global toggle triggered from interactive grid cards
window.toggleDishSelection = function (btn, dishName, category) {
    if (selectedDishes.has(dishName)) {
        selectedDishes.delete(dishName);
        btn.classList.remove('selected');
        btn.textContent = 'Add to Custom Menu';
    } else {
        selectedDishes.add(dishName);
        btn.classList.add('selected');
        btn.textContent = 'Selected';
    }

    syncMenuStateToUI();
};

// Main state synchronizer
function syncMenuStateToUI() {
    // 1. Sync Interactive Menu Cards buttons
    document.querySelectorAll('.add-custom-btn').forEach(btn => {
        const cardTitle = btn.closest('.dish-details').querySelector('.dish-title').textContent;
        if (selectedDishes.has(cardTitle)) {
            btn.classList.add('selected');
            btn.textContent = 'Selected';
        } else {
            btn.classList.remove('selected');
            btn.textContent = 'Add to Custom Menu';
        }
    });

    // 2. Sync Builder Checkboxes
    document.querySelectorAll('.builder-group-body input[type="checkbox"]').forEach(chk => {
        const dishName = chk.value;
        const parentLabel = document.getElementById(`lbl-${chk.id}`);

        if (selectedDishes.has(dishName)) {
            chk.checked = true;
            if (parentLabel) parentLabel.classList.add('selected');
        } else {
            chk.checked = false;
            if (parentLabel) parentLabel.classList.remove('selected');
        }
    });

    // 3. Re-render Sticky Sidebar items
    renderSidebarSummary();

    saveCustomMenuToStorage();
}

function renderSidebarSummary() {
    const listContainer = document.getElementById('summaryItems');
    const counterLabel = document.getElementById('itemCount');
    if (!listContainer || !counterLabel) return;

    listContainer.innerHTML = '';
    counterLabel.textContent = selectedDishes.size;

    if (selectedDishes.size === 0) {
        listContainer.innerHTML = `
            <div class="widget-list-empty">
                <i class="fas fa-clipboard-list" style="font-size: 2rem; margin-bottom: 0.75rem; display: block; opacity: 0.6;"></i>
                No dishes selected. Select from categories above or load a preset menu.
            </div>
        `;
        return;
    }

    // Find category for each selected item
    selectedDishes.forEach(itemName => {
        let cat = 'Custom Item';
        Object.keys(menuData).forEach(c => {
            if (menuData[c].some(d => d.name === itemName)) {
                cat = c;
            }
        });

        const itemRow = document.createElement('div');
        itemRow.className = 'widget-list-item';
        itemRow.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 0.15rem;">
                <span class="widget-list-item-name">${itemName}</span>
                <span class="widget-list-item-cat">${cat}</span>
            </div>
            <span class="widget-list-remove" onclick="removeSidebarItem('${itemName.replace(/'/g, "\\'")}')">
                <i class="fas fa-times-circle"></i>
            </span>
        `;
        listContainer.appendChild(itemRow);
    });
}

window.removeSidebarItem = function (dishName) {
    selectedDishes.delete(dishName);
    syncMenuStateToUI();
};

// Inquire Action (Copies selected menu details, pastes it into the message box, and scrolls)
window.inquireCustomMenu = function () {
    if (selectedDishes.size === 0) {
        showToastNotification("Your custom menu is empty! Please select some dishes first.", "warning");
        return;
    }

    const messageArea = document.getElementById('message');
    const eventTypeInput = document.getElementById('eventType');
    if (!messageArea) return;

    messageArea.value =
    `Hello! I would like to inquire about pricing and customization for my event.
    
    Please find my selected menu items below.
    
    Looking forward to your response!`;
    
    if (eventTypeInput) {
        eventTypeInput.value = 'Custom Catering Package';
    }

    showToastNotification("Custom menu copied! Please fill out the inquiry form details.");

    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

/* ===== 6. GALLERY — DATA, FILTERS & LIGHTBOX ===== */
const galleryFilters = [
    { id: 'all', label: 'All' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'traditional', label: 'Traditional Events' },
    { id: 'food-setup', label: 'Food Setup' },
    { id: 'live-counters', label: 'Live Counters' }
];

const gallerySectionMeta = [
    { id: 'wedding-events', title: 'Wedding Events', subtitle: 'Grand celebrations crafted with royal hospitality' },
    { id: 'traditional-functions', title: 'Traditional Functions', subtitle: 'Authentic Maharashtrian ceremonies & festive gatherings' },
    { id: 'catering-setup', title: 'Catering Setup', subtitle: 'Premium buffet lines and elegant service stations' },
    { id: 'signature-dishes', title: 'Signature Dishes', subtitle: 'Pure vegetarian culinary highlights from our kitchen' },
    { id: 'live-counters', title: 'Live Counters', subtitle: 'Fresh, interactive counters for an unforgettable guest experience' },
    { id: 'decoration-serving', title: 'Decoration & Serving', subtitle: 'Refined table décor and graceful presentation' }
];

const galleryPhotos = [
    { src: "Gallery/Wedding1.jpeg", title: 'Grand Wedding Banquet Hall', cat: 'Wedding Reception', filter: 'weddings', section: 'wedding-events', featured: true },
    { src: "Gallery/Wedding2.jpeg", title: 'Outdoor Wedding Canopy Setup', cat: 'Wedding Decor', filter: 'weddings', section: 'wedding-events', featured: true },
    { src: "Gallery/Wedding3.jpeg", title: 'Royal Wedding Buffet Spread', cat: 'Wedding Catering', filter: 'weddings', section: 'wedding-events', featured: true },
    { src: "Gallery/Wedding4.jpeg", title: 'Elegant Wedding Dinner Service', cat: 'Reception Dinner', filter: 'weddings', section: 'wedding-events' },
    { src: "Gallery/Wedding5.jpeg", title: 'Maharashtrian Wedding Feast', cat: 'Traditional Wedding', filter: 'weddings', section: 'wedding-events' },

    { src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80', title: 'Festive Traditional Spread', cat: 'Cultural Function', filter: 'traditional', section: 'traditional-functions', featured: true },
    { src: 'veg dish.jpeg', title: 'Authentic Kolhapuri Thali', cat: 'Traditional Feast', filter: 'traditional', section: 'traditional-functions' },
    { src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', title: 'Satyanarayan Puja Catering', cat: 'Religious Function', filter: 'traditional', section: 'traditional-functions' },
    { src: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80', title: 'South Indian Festival Counter', cat: 'Festival Event', filter: 'traditional', section: 'traditional-functions' },

    { src: "Gallery/Food-Setup1.jpeg", title: 'Premium Veg Buffet Arrangement', cat: 'Buffet Setup', filter: 'food-setup', section: 'catering-setup', featured: true },
    { src: "Gallery/Food-Setup2.jpeg", title: 'Exquisite Pure Veg Spread', cat: 'Food Presentation', filter: 'food-setup', section: 'catering-setup' },
    { src: "Gallery/Food-Setup3.jpeg", title: 'Grand Catering Service Line', cat: 'Event Setup', filter: 'food-setup', section: 'catering-setup' },
    { src: "Gallery/Corporate1.jpeg", title: 'Corporate Lunch Buffet', cat: 'Corporate Catering', filter: 'corporate', section: 'catering-setup' },


    { src: "Gallery/Food-Setup4.jpeg", title: 'Paneer Tikka Presentation', cat: 'Signature Main', filter: 'food-setup', section: 'signature-dishes', featured: true },
    { src: "Gallery/Food-Setup5.jpeg", title: 'Crispy Masala Dosa Platter', cat: 'South Indian Special', filter: 'food-setup', section: 'signature-dishes' },

    { src: "Gallery/Live-Counter1.jpeg", title: 'Live Dosa Counter', cat: 'Live Station', filter: 'live-counters', section: 'live-counters', featured: true },
    { src: "Gallery/Live-Counter2.jpeg", title: 'Live Curry & Bread Station', cat: 'Live Indian', filter: 'live-counters', section: 'live-counters' },
    { src: "Gallery/Live-Counter3.jpeg", title: 'Live Dosa Counter', cat: 'Live Station', filter: 'live-counters', section: 'live-counters', featured: true },
    { src: "Gallery/Live-Counter4.jpeg", title: 'Live Curry & Bread Station', cat: 'Live Indian', filter: 'live-counters', section: 'live-counters' },
    { src: "Gallery/Live-Counter5.jpeg", title: 'Live Dosa Counter', cat: 'Live Station', filter: 'live-counters', section: 'live-counters', featured: true },

    { src: "Gallery/Wedding6.jpeg", title: 'Luxury Table Decoration', cat: 'Table Styling', filter: 'weddings', section: 'decoration-serving' },
    { src: "Gallery/Wedding7.jpeg", title: 'Fine Serving Presentation', cat: 'Service Excellence', filter: 'weddings', section: 'decoration-serving' },
    { src: "Gallery/Corporate2.jpeg", title: 'Corporate Gala Setup', cat: 'Corporate Event', filter: 'corporate', section: 'decoration-serving' },
    { src: "Gallery/Corporate3.jpeg", title: 'Corporate Lunch Buffet', cat: 'Corporate Catering', filter: 'corporate', section: 'catering-setup' },
    { src: "Gallery/Corporate4.jpeg", title: 'Corporate Gala Setup', cat: 'Corporate Event', filter: 'corporate', section: 'decoration-serving' },
    { src: "Gallery/Corporate5.jpeg", title: 'Corporate Lunch Buffet', cat: 'Corporate Catering', filter: 'corporate', section: 'catering-setup' }
];

let activeLightboxIndex = 0;
let activeLightboxSet = galleryPhotos;
let currentGalleryFilter = 'all';
let lightboxControlsBound = false;

function initGallery() {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    bindLightboxControls(modal);

    const featuredGrid = document.getElementById('featuredGalleryGrid');
    if (featuredGrid) {
        const featured = galleryPhotos.filter(p => p.featured);
        renderGalleryGrid(featuredGrid, featured, { featured: true });
    }

    const pageContent = document.getElementById('galleryPageContent');
    if (pageContent) {
        initGalleryPage(pageContent);
    }
}

function bindLightboxControls(modal) {
    if (lightboxControlsBound) return;
    lightboxControlsBound = true;

    const closeBtn = document.getElementById('lightboxClose');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
    });

    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox(-1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox(1);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function createGalleryItem(photo, idx) {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.style.animationDelay = `${idx * 0.08}s`;
    item.innerHTML = `
        <img src="${photo.src}" alt="${photo.title}" loading="lazy">
        <div class="gallery-hover-overlay">
            <h4 class="gallery-hover-title">${photo.title}</h4>
            <span class="gallery-hover-cat">${photo.cat}</span>
        </div>
    `;
    return item;
}

function renderGalleryGrid(container, photos, options = {}) {
    container.innerHTML = '';
    if (options.featured) {
        container.classList.add('featured-gallery-grid');
    } else {
        container.classList.remove('featured-gallery-grid');
    }

    photos.forEach((photo, idx) => {
        const item = createGalleryItem(photo, idx);
        item.addEventListener('click', () => {
            activeLightboxSet = photos;
            openLightbox(idx);
        });
        container.appendChild(item);
    });

    setTimeout(() => window.dispatchEvent(new Event('scroll')), 80);
}

function initGalleryPage(wrapper) {
    const filtersContainer = document.getElementById('galleryFilters');
    if (!filtersContainer) return;

    filtersContainer.innerHTML = '';
    galleryFilters.forEach((filter, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `gallery-filter-btn menu-tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = filter.label;
        btn.dataset.filter = filter.id;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGalleryFilter = filter.id;
            renderGalleryPageContent(wrapper);
        });
        filtersContainer.appendChild(btn);
    });

    renderGalleryPageContent(wrapper);
}

function renderGalleryPageContent(wrapper) {
    wrapper.innerHTML = '';

    const filtered = currentGalleryFilter === 'all'
        ? galleryPhotos
        : galleryPhotos.filter(p => p.filter === currentGalleryFilter);

    if (currentGalleryFilter === 'all') {
        gallerySectionMeta.forEach(section => {
            const sectionPhotos = galleryPhotos.filter(p => p.section === section.id);
            if (sectionPhotos.length === 0) return;

            const block = document.createElement('div');
            block.className = 'gallery-section-block reveal';
            block.innerHTML = `
                <div class="gallery-section-header">
                    <h3 class="gallery-section-heading">${section.title}</h3>
                    <p class="gallery-section-sub">${section.subtitle}</p>
                    <div class="section-underline" style="margin: 1rem 0 0;"></div>
                </div>
            `;

            const grid = document.createElement('div');
            grid.className = 'gallery-grid';
            renderGalleryGrid(grid, sectionPhotos);
            block.appendChild(grid);
            wrapper.appendChild(block);
        });
    } else {
        const block = document.createElement('div');
        block.className = 'gallery-filter-results reveal';
        const grid = document.createElement('div');
        grid.className = 'gallery-grid';
        renderGalleryGrid(grid, filtered);
        block.appendChild(grid);
        wrapper.appendChild(block);
    }
}

function openLightbox(index) {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const captionTitle = document.getElementById('lightboxCaptionTitle');
    const captionCat = document.getElementById('lightboxCaptionCat');

    activeLightboxIndex = index;
    const photo = activeLightboxSet[index];

    modalImg.src = photo.src;
    captionTitle.textContent = photo.title;
    captionCat.textContent = photo.cat;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // stop scroll
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // restore scroll
}

function navigateLightbox(direction) {
    activeLightboxIndex = (activeLightboxIndex + direction + activeLightboxSet.length) % activeLightboxSet.length;
    const photo = activeLightboxSet[activeLightboxIndex];

    const modalImg = document.getElementById('lightboxImg');
    const captionTitle = document.getElementById('lightboxCaptionTitle');
    const captionCat = document.getElementById('lightboxCaptionCat');

    modalImg.style.opacity = '0.3';
    setTimeout(() => {
        modalImg.src = photo.src;
        captionTitle.textContent = photo.title;
        captionCat.textContent = photo.cat;
        modalImg.style.opacity = '1';
    }, 150);
}

/* ===== 7. TESTIMONIALS CAROUSEL ===== */
function initTestimonials() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('testimonialDots');
    if (slides.length === 0 || !dotsContainer) return;

    let currentIndex = 0;
    let timer = null;

    // Render dot navigators
    slides.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = `testimonial-nav-dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            setActiveSlide(idx);
            resetTestimonialTimer();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.testimonial-nav-dot');

    const setActiveSlide = (index) => {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    };

    const runAutoCycle = () => {
        let nextIndex = (currentIndex + 1) % slides.length;
        setActiveSlide(nextIndex);
    };

    const resetTestimonialTimer = () => {
        clearInterval(timer);
        timer = setInterval(runAutoCycle, 5000); // changes every 5 seconds
    };

    resetTestimonialTimer();
}

/* ===== 8. CONTACT FORM VALIDATOR & WHATSAPP REDIRECTION ===== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        const eventInput = document.getElementById('eventType');
        const messageInput = document.getElementById('message');

        // Clean validation
        if (!nameInput.value.trim() || !phoneInput.value.trim() || !eventInput.value.trim() || !messageInput.value.trim()) {
            showToastNotification("Please fill out all fields correctly.", "warning");
            return;
        }

        // Phone Validation (simple digit check)
        const phoneRegex = /^[0-9\s+-]{10,15}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            showToastNotification("Please enter a valid phone number (at least 10 digits).", "warning");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showToastNotification("Please enter a valid email address.", "warning");
            return;
        }

        // Send Inquiry Logic
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
        const event = eventInput.value.trim();
        const msgText = messageInput.value.trim();

        // Check if custom menu items were selected and appended
        let menuSectionText = '';
        if (selectedDishes.size > 0) {
            menuSectionText = `\n\n*SELECTED CUSTOM MENU ITEMS:* \n${Array.from(selectedDishes).map(d => `- ${d}`).join('\n')}`;
        }

        // Construct formatted WhatsApp message
        const whatsappText = `=== NEW CATERING INQUIRY ===

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Event Type: ${event}
        
        Message:
        ${msgText}
        
        ----------------------------
        SELECTED CUSTOM MENU ITEMS
        ----------------------------
        ${Array.from(selectedDishes).map(d => `• ${d}`).join('\n')}
        `;
        const encodedMsg = encodeURIComponent(whatsappText);
        // Direct to business number: 9860920739
        const waUrl = `https://wa.me/918329265646?text=${encodedMsg}`;

        // Open in new tab
        window.open(waUrl, '_blank');

        // Show Success feedback
        showToastNotification("Opening WhatsApp chat to finalize your inquiry! Thank you.");
        form.reset();

        // Clear selected custom menu
        selectedDishes.clear();
        syncMenuStateToUI();
    });
}

/* ===== 9. FLOATING WIDGET PANELS ===== */
function initFloatingWidgets() {
    const toTopBtn = document.getElementById('scrollToTop');
    if (!toTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            toTopBtn.classList.add('show');
        } else {
            toTopBtn.classList.remove('show');
        }
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ===== 10. SCROLL REVEALS (INTERSECTION OBSERVER) ===== */
function initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (reveals.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, observerOptions);

    reveals.forEach(element => observer.observe(element));
}

/* ===== HELPER: TOAST NOTIFICATIONS ===== */
function showToastNotification(message, type = 'success') {
    // Remove existing toasts
    const oldToast = document.querySelector('.custom-toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = `custom-toast ${type}`;

    // Style configurations inline to prevent dependency issues
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        backgroundColor: type === 'success' ? '#8A1429' : '#C5A059',
        border: type === 'success' ? '1px solid #C5A059' : '1px solid #141519',
        color: type === 'success' ? '#FFFFFF' : '#141519',
        padding: '1rem 2rem',
        borderRadius: '8px',
        boxShadow: '0 8px 24px rgba(138,20,41,0.2)',
        fontWeight: '700',
        zIndex: '3000',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        transform: 'translateY(20px)',
        opacity: '0',
        fontSize: '0.95rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
    });

    const iconHTML = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-triangle"></i>';
    toast.innerHTML = `${iconHTML} <span>${message}</span>`;

    document.body.appendChild(toast);

    // Anim reveal
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 50);

    // Dismissal
    setTimeout(() => {
        toast.style.transform = 'translateY(20px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

/* ===== PREMIUM PRELOADER DISMISSAL ===== */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Ensure smooth progress completion before fading out
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 800);
    }
});
