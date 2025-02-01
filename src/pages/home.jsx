import { useState } from 'react';
import myAxios from '../lib/axios';
import { useNavigate, Link } from 'react-router';
import { useAuthStore } from '../store/authStore';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/navbar';
import StarRating from '../components/starRating';

function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await myAxios.get('products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Lempar error agar bisa ditangani oleh React Query
    }
  };

  // React Query untuk mengambil data produk
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  // Cek apakah user sudah login
  if (!user) {
    navigate('/login'); // Arahkan ke halaman login jika user tidak terdefinisi
    return null; // Jangan render apa-apa
  }

  // Tampilkan indikator loading saat data sedang dimuat
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Tampilkan pesan error jika terjadi kesalahan
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(products);

  return (
    <>
      <Navbar/>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full p-3 md:w-4/5 lg:w-4/6 mx-auto py-5 pt-20">
        {products.map((product) => (
          <div key={product.id} className="product sm:shrink-0 h-60 sm:h-90 md:h-90 lg:h-70 xl:h-80 rounded-lg outline flex flex-col justify-between shadow-xl hover:shadow-inner hover:shadow-white hover:scale-101 transition-transform transform duration-300">
            <div>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="w-80 h-32 sm:w-92 sm:h-54 md:w-100 md:h-56 lg:h-40 xl:h-50 object-cover rounded-t-lg" />
            </Link>
            <Link to={`/product/${product.id}`}>
            <div className="p-2">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base w-full white line-clamp-2 font-semibold">{product.title}</h2>
            </div>
            </Link>
            </div>
            <Link to={`/product/${product.id}`}>
              <div className='flex justify-between p-2 items-center text-xs sm:text-sm md:text-base lg:text-sm xl:text-base'>
                  <div className='p2'>
                  <p>{product.rating.count} reviews</p>
                  <StarRating rating={product.rating.rate} />
                  </div>
                  <div className='p-2'>
                    <span className='font-bold'>${product.price}</span>
                  </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;