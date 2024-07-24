import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-5 bg-brick bg-no-repeat bg-center opacity-0.20">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-5xl font-bold text-center text-orange-600 mb-10">About Food Shrine</h1>
        <p className="text-2xl text-gray-800 mb-6">
          Welcome to <span className="font-semibold text-red-600">Food Shrine</span>, your ultimate destination for delightful culinary experiences delivered straight to your doorsteps. At Food Shrine, we believe in the power of good food to bring people together, and our mission is to make delicious, high-quality meals accessible to everyone.
        </p>
        <p className="text-2xl text-gray-800 mb-6">
          Our journey began with a simple idea: to create a platform where food lovers can explore a wide variety of cuisines from the comfort of their homes. Whether you're craving a hearty meal, a quick snack, or a gourmet experience, Food Shrine has got you covered.
        </p>
        <p className="text-2xl text-gray-800 mb-6">
          We partner with top-notch restaurants and chefs to bring you an extensive menu that caters to all tastes and preferences. Our user-friendly app and website make it easy to browse, order, and track your food, ensuring a seamless and satisfying experience every time.
        </p>
        <p className="text-2xl text-gray-800 mb-6">
          At Food Shrine, we are committed to quality and customer satisfaction. Our dedicated team works around the clock to ensure that your orders are prepared with care and delivered promptly. We also prioritize sustainability and eco-friendliness by using biodegradable packaging and promoting responsible food practices.
        </p>
        <p className="text-2xl text-gray-800 mb-6">
          Join us on this delicious journey and discover why Food Shrine is the go-to choice for food enthusiasts everywhere. Thank you for choosing Food Shrine – where every meal is a celebration!
        </p>
      </div>
    </div>
  );
}

export default About;
