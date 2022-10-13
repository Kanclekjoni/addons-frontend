import makeClassName from 'classnames';
import * as React from 'react';
import { compose } from 'redux';

import translate from 'amo/i18n/translate';
import Rating from 'amo/components/Rating';
import type { I18nType } from 'amo/types/i18n';
import './styles.scss';

export type Props = {
  children?: React.ReactNode | string;
  className?: string;
  onSelectRating: ((score: number) => void) | void;
  rating: number | null | undefined;
};
type InternalProps = Props & {
  i18n: I18nType;
};
export const AddonReviewManagerRatingBase = ({
  children,
  className,
  i18n,
  onSelectRating,
  rating,
}: InternalProps): React.ReactNode => {
  const readOnly = !onSelectRating;
  return <div className={makeClassName('AddonReviewManagerRating', className)}>
      <span>{i18n.gettext('Your star rating:')}</span>
      <Rating onSelectRating={onSelectRating} rating={rating} readOnly={readOnly} styleSize="small" yellowStars />
      {children}
    </div>;
};
const AddonReviewManagerRating: React.ComponentType<Props> = compose(translate())(AddonReviewManagerRatingBase);
export default AddonReviewManagerRating;