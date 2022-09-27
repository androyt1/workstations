
const DurationPicker = ({handleChange}) => {
  return (
    <div className='w-[30%]'>
        <select name="duration" id="" defaultValue={30} onChange={handleChange}>
            <option value={30}>30 Minutes</option>
            <option value={60}>60 Minutes</option>
            <option value={90}>90 Minutes</option>
        </select>
    </div>
  )
}

export default DurationPicker