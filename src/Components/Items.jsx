import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Items() {
  const [openIndex, setOpenIndex] = useState(null);
  const [itemsData, setItemsData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    // Fetch data from API on component mount
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:1337/api/products?populate=*', {
          headers: {
            'Authorization': 'Bearer be858ffa10398566441fa592a79b65bad67f0cbd270ebc1118c1c0797eadc59d7668846459a520ee3b8b1862eba555bec325a4856fca0be84902ba643441b1edc4a0c9356d2f21a309d2e500080adb107da13ee355bbc5863aac3ccfcd1dac33371c6c60c619e21a2bc0b34c05a4eee9ffecd7e13b8d70428cd4a4270f5e971b'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Process the data
        if (data && data.data && Array.isArray(data.data)) {
          const formattedData = data.data.map(item => ({
            name: item.attributes?.Title || 'No name',
            category: item.attributes?.Category || 'No category',
            price: item.attributes?.Price || 0,
            description: item.attributes?.Description || 'No description',
            thumbnail: item.attributes?.Thumbnail?.data?.attributes?.url || '/default-image.jpg' // Default image if no thumbnail
          }));
          setItemsData(formattedData);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openIndex]);

  return (
    <>
      {openIndex != null ? (
        <div className="modal">
          <div className="modal__content">
            <img src={'http://localhost:1337' + itemsData[openIndex]?.thumbnail} alt="item" />
            <div className="info">
              <a onClick={() => setOpenIndex(null)}>X</a>
              <h3>{t(itemsData[openIndex]?.name)}</h3>
              <p className='category'>{t(itemsData[openIndex]?.category)}</p>
              <span>&#36;{itemsData[openIndex]?.price}</span>
              <p className='description'>{t(itemsData[openIndex]?.description)}</p>
            </div>
          </div>
        </div>
      ) : null}
      <div className="items">
        {itemsData.map((item, index) => (
          <div onClick={() => setOpenIndex(index)} className="item" key={index}>
            <img src={'http://localhost:1337' + item.thumbnail} alt="item" />
            <div className="info">
              <h3>{t(item.name)}</h3>
              <p className='category'>{t(item.category)}</p>
              <span>&#36;{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
