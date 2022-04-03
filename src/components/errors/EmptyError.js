

export default function EmptyError({text="array is null"}){

  return(
      <div className="error">
          <p>
              {
                  text
              }
          </p>
      </div>
  )
}