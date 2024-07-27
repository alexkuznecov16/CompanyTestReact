import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
	en: {
		translation: {
			//! Home page start ====================================

			HomeTitle: 'Our company website',
			HomeParagraph: 'Welcome to the our website!',
			HomeButton: 'Get more',

			//! Home page end ====================================

			//! Items page start ====================================

			// Titles

			// Categories
			'Electronics': 'Electronics',
			'Home Appliances': 'Home Appliances',
			'Home and Garden': 'Home and Garden',
			'Clothing and Footwear': 'Clothing and Footwear',
			'Auto and Motorcycle': 'Auto and Motorcycle',
			'Sports and Outdoors': 'Sports and Outdoors',
			'Beauty and Health': 'Beauty and Health',
			'Office Supplies': 'Office Supplies',
			'Toys and Kids Products': 'Toys and Kids Products',
			'Other': 'Other',

			// Description
			'6.7-inch Super Retina XDR display and advanced camera system for better photos in any light. Cinematic mode now in 4K Dolby Vision up to 30 fps. Action mode for smooth, steady, handheld videos. All-day battery life and up to 26 hours of video playback. A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular.':
				'6.7-inch Super Retina XDR display and advanced camera system for better photos in any light. Cinematic mode now in 4K Dolby Vision up to 30 fps. Action mode for smooth, steady, handheld videos. All-day battery life and up to 26 hours of video playback. A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular.',

			//! Items page end ====================================
		},
	},
	lv: {
		translation: {
			//! Home page start ====================================

			HomeTitle: 'Mūsu kompanijas vietne',
			HomeParagraph: 'Sveicināti mūsu vietnē!',
			HomeButton: 'Saņemt vairak',

			//! Home page end ====================================

			//! Items page start ====================================

			// Titles
			Template2: 'Šablons - 2',
			Template3: 'Šablons - 3',
			Template4: 'Šablons - 4',
			Template5: 'Šablons - 5',
			Template6: 'Šablons - 6',
			Template7: 'Šablons - 7',
			Template8: 'Šablons - 8',

			// Categories
			'Electronics': 'Elektronika',
			'Home Appliances': 'Sadzīves tehnika',
			'Home and Garden': 'Mājai un dārzam',
			'Clothing and Footwear': 'Apģērbi un apavi',
			'Auto and Motorcycle': 'Auto un motocikli',
			'Sports and Outdoors': 'Sports un brīvā daba',
			'Beauty and Health': 'Skaistumkopšana un veselība',
			'Office Supplies': 'Biroja piederumi',
			'Toys and Kids Products': 'Rotaļlietas un preces bērniem',
			'Other': 'Citi',

			// Description
			'6.7-inch Super Retina XDR display and advanced camera system for better photos in any light. Cinematic mode now in 4K Dolby Vision up to 30 fps. Action mode for smooth, steady, handheld videos. All-day battery life and up to 26 hours of video playback. A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular.': `Apple iPhone 14 Plus, 128 GB, Pusnakts - Atbloķēts 6,7 collu Super Retina XDR displejs un uzlabota kameras sistēma labākām bildēm jebkurā apgaismojumā. Kinorežīms tagad 4K Dolby Vision līdz 30 kadriem sekundē. Rīcības režīms vienmērīgiem, stabiliem video no rokas. Akumulatora darbības laiks visas dienas garumā un līdz 26 stundām video atskaņošanas. A15 Bionic mikroshēma ar 5 kodolu GPU zibenīgai veiktspējai. Īpaši ātrs 5G šūnu tīkls.`,

			//! Items page end ====================================
		},
	},
	ru: {
		translation: {
			//! Home page start ====================================

			HomeTitle: 'Сайт нашей компании',
			HomeParagraph: 'Добро пожаловать на наш сайт!',
			HomeButton: 'Получить больше',

			//! Home page end ====================================

			//! Items page start ====================================

			// Titles
			Template1: 'Название - 1',
			Template2: 'Название - 2',
			Template3: 'Название - 3',
			Template4: 'Название - 4',
			Template5: 'Название - 5',
			Template6: 'Название - 6',
			Template7: 'Название - 7',
			Template8: 'Название - 8',

			// Categories
			'Electronics': 'Электроника',
			'Home Appliances': 'Бытовая техника',
			'Home and Garden': 'Дом и сад',
			'Clothing and Footwear': 'Одежда и обувь',
			'Auto and Motorcycle': 'Авто и мото',
			'Sports and Outdoors': 'Спорт и активный отдых',
			'Beauty and Health': 'Красота и здоровье',
			'Office Supplies': 'Офисные принадлежности',
			'Toys and Kids Products': 'Игрушку и детские товары',
			'Other': 'Прочее',

			// Description
			Item1: 'Переведенный текст - 1',
			Item2: 'Переведенный текст - 2',
			Item3: 'Переведенный текст - 3',
			Item4: 'Переведенный текст - 4',
			Item5: 'Переведенный текст - 5',
			Item6: 'Переведенный текст - 6',
			Item7: 'Переведенный текст - 7',
			Item8: 'Переведенный текст - 8',

			//! Items page end ====================================
		},
	},
};

{
	/* <h3>{t('HomeTitle')}</h3>
<p>{t('HomeParagraph')}</p>
<button>{t('HomeButton')}</button> */
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en', // Default language
	interpolation: {
		escapeValue: false, // React already escapes values
	},
});

export default i18n;
