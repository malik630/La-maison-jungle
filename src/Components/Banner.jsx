import '../Styles/Banner.css'

function Banner({ children, className = "", rightAligned = false }) {
  const bannerClass = `lmj-banner ${rightAligned ? 'right-aligned' : ''} ${className}`.trim()
  
  return (
    <div className={bannerClass}>
      <div className="banner-content">
        {children}
      </div>
    </div>
  )
}

export default Banner