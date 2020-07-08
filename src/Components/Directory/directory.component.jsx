import React from 'react';
import MenuItem from '../Menu-item/menu-item.component'
import '../Directory/directory.styles.scss'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selector'

const Directory=({sections})=>{
        return(
            <div className='directory-menu'>
            {
                sections.map(({id, ...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
            </div>
        )
  
}

const mapStateToProps=createStructuredSelector(
  {
    sections: selectDirectorySections
  }
)
export default connect(mapStateToProps)(Directory);