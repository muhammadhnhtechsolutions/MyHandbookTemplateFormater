export const validateParent1 = (parents) => {
  return parents.map((parent,index)=>{
  const errors = {};

  // Validate relation
  if (!parent.relation || parent.relation.trim() === '') {
    errors.relation = 'Relation is required.';
  }

  // Validate other_relation if relation is 'other'
  if (parent.relation && parent.relation.trim() === 'other' && (!parent.other_relation || parent.other_relation.trim() === '')) {
    errors.other_relation = 'Custom relation is required.';
  }

  // Validate full_name
  if (!parent.full_name || parent.full_name.trim() === '') {
    errors.full_name = 'Full name is required.';
  } else if (parent.full_name.length > 255) {
    errors.full_name = 'Full name cannot exceed 255 characters.';
  }

  // Validate birth_city
  if (!parent.birth_city || parent.birth_city.trim() === '') {
    errors.birth_city = 'Birth city is required.';
  }

  // Validate city
  if (!parent.city || parent.city.trim() === '') {
    errors.city = 'Current city is required.';
  }

  // Validate dob (date of birth)
  if (!parent.dob || parent.dob.trim() === '') {
    errors.dob = 'Date of birth is required.';
  }

  // Validate profession
  if (!parent.profession || parent.profession.trim() === '') {
    errors.profession = 'Profession is required.';
  }

  // Validate favourite_food
  if (!parent.favourite_food || parent.favourite_food.trim() === '') {
    errors.favourite_food = 'Favorite food is required.';
  }

  // Validate other_favourite_food if favourite_food is 'other'
  if (parent.favourite_food && parent.favourite_food.trim() === 'other' && (!parent.other_favourite_food || parent.other_favourite_food.trim() === '')) {
    errors.other_favourite_food = 'Custom favorite food is required.';
  }

  // Validate favourite_holiday
  if (!parent.favourite_holiday || parent.favourite_holiday.trim() === '') {
    errors.favourite_holiday = 'Favorite holiday is required.';
  }

  // Validate other_favourite_holiday if favourite_holiday is 'other'
  if (parent.favourite_holiday && parent.favourite_holiday.trim() === 'other' && (!parent.other_favourite_holiday || parent.other_favourite_holiday.trim() === '')) {
    errors.other_favourite_holiday = 'Custom favorite holiday is required.';
  }

  // Validate afraid_of
  if (!parent.afraid_of || parent.afraid_of.trim() === '') {
    errors.afraid_of = 'Greatest fear is required.';
  }

  // Validate other_afraid_of if afraid_of is 'other'
  if (parent.afraid_of && parent.afraid_of.trim() === 'other' && (!parent.other_afraid_of || parent.other_afraid_of.trim() === '')) {
    errors.other_afraid_of = 'Custom fear is required.';
  }

  // Validate favourite_quote
  if (!parent.favourite_quote || parent.favourite_quote.trim() === '') {
    errors.favourite_quote = 'Favorite quote is required.';
  }

  // Validate other_favourite_quote if favourite_quote is 'other'
  if (parent.favourite_quote && parent.favourite_quote.trim() === 'other' && (!parent.other_favourite_quote || parent.other_favourite_quote.trim() === '')) {
    errors.other_favourite_quote = 'Custom favorite quote is required.';
  }

  return errors;
})
};


// Validation function for otherChild array
export const validateChild = (children) => {
  return children.map((child, index) => {
    let errors = {};

    // Relation validation
    if (!child.relation || child.relation.trim() === '') {
      errors.relation = 'Relation is required';
    } else if (child.relation && child.relation.trim() === 'other' && (!child.other_relation || child.other_relation.trim() === '')) {
      errors.other_relation = 'Custom relation is required';
    }

    // Full name validation
    if (!child.full_name || child.full_name.trim() === '') {
      errors.full_name = 'Full name is required';
    }

    // Birth city validation
    if (!child.birth_city || child.birth_city.trim() === '') {
      errors.birth_city = 'Birth city is required';
    }

    // Current city validation
    if (!child.city || child.city.trim() === '') {
      errors.city = 'Current city is required';
    }

    // Email validation
    if (child.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(child.email)) {
      errors.email = 'Invalid email address';
    }

    // Date of birth validation
    if (!child.dob || child.dob.trim() === '') {
      errors.dob = 'Date of birth is required';
    }

    // Favourite food validation
    if (!child.favourite_food || child.favourite_food.trim() === '') {
      errors.favourite_food = 'Favourite food is required';
    } else if (child.favourite_food && child.favourite_food.trim() === 'other' && (!child.other_favourite_food || child.other_favourite_food.trim() === '')) {
      errors.other_favourite_food = 'Custom favourite food is required';
    }

    // Best attribute validation
    if (!child.best_attribute || child.best_attribute.trim() === '') {
      errors.best_attribute = 'Best attribute is required';
    } else if (child.best_attribute && child.best_attribute.trim() === 'other' && (!child.other_best_attribute || child.other_best_attribute.trim() === '')) {
      errors.other_best_attribute = 'Custom best attribute is required';
    }

    // Favourite quote validation
    if (!child.favourite_quote || child.favourite_quote.trim() === '') {
      errors.favourite_quote = 'Favourite quote is required';
    } else if (child.favourite_quote && child.favourite_quote.trim() === 'other' && (!child.other_favourite_quote || child.other_favourite_quote.trim() === '')) {
      errors.other_favourite_quote = 'Custom favourite quote is required';
    }

    return errors;
  });
};
