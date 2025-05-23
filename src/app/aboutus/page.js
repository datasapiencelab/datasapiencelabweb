import NavBar from '../components/navbar'
import Footer from '../components/footer'
import TopImage from '/public/backgroundaiml3.webp'
export default function Home() {
  return (
    <main>
      <NavBar />
      <div
        style={{
          "--image-url": `url(${TopImage.src})`,
          "--image-url-mobile": `url(${TopImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="hero min-h-screen bg-[image:var(--image-url-mobile)] md:bg-[image:var(--image-url)]"
      >
        <div className="hero-content text-center bg-opacity-90 bg-base-100 rounded-xl">
            <h1 className="text-5xl font-bold rounded">
              Data Sapience Lab
            </h1>
        </div>
      </div>
      <div className="px-4 text-center py-16 mx-auto max-w-7xl relative">
        <h1 className="flex justify-center items-center mt-5 mb-5 text-5xl font-montseratt font-bold">
          PURPOSE
        </h1>
        <p className="text-2xl font-roboto">
          Create an environment where people from all backgrounds can collaborate,
          share knowledge and feel the joy of creating amazing products and experiences.
        </p>

        <h2 className="flex justify-center items-center mt-5 mb-5 text-5xl font-montseratt font-bold">
          CORE VALUES
        </h2>

        <h2 className="flex justify-center items-center mt-5 mb-5 text-4xl font-montseratt font-bold">
          RESPECT AND FREEDOM FOR THE INDIVIDUAL
        </h2>
        <p className="text-2xl font-roboto">
          Our people will always be the most important aspect of our company. We
          show equal respect to everyone regardless of their race, gender, religion
          or role in the company. We encourage and invest in the growth of our team
          members in every possible way.
        </p>
      </div>
      <Footer />
    </main>
  )
}
