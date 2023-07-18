import React from 'react'

function DynamicHeadingContent({brief = 'brief', title = 'title', description = 'description'}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 capitalize mb-8 text-center">
      <span className="uppercase font-medium text-sm md:text-base  text-primary-text">
        {brief}
      </span>
      <h2 className=" text-lg md:text-4xl font-semibold text-primary-text">
        {title}
      </h2>
      <p className="text-text-light text-sm leading-6 md:text-lg">
        {description}
      </p>
    </div>
  )
}

export default DynamicHeadingContent