import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/system';
import { useState } from 'react';

import Typography from '/src/components/Typography';
import PureCmsBlock from '/src/features/cmsPages/cmsBlocks/pureCmsBlock';

const CollapsibleDetailsHeader = styled(
  'button',
  {
    name: 'KeyLiteCollapsibleDetailsHeader',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.background.cream,
  border: 'none',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  width: '100%',
}));

const CollapsibleDetailsBody = styled(
  'div',
  {
    name: 'KeyLiteCollapsibleDetailsBody', // FIXME: separate namespace for cms blocks vs top level components
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ isOpen, theme }) => ({
  display: isOpen ? 'block' : 'none',
}));

const CollapsibleDetails = ({ cmsBlock, cmsBlocks, ...other }) => {
  const { cmsBlockFieldValues } = cmsBlock;
  const nestedBlockId = cmsBlockFieldValues['Collapsible Details Nested Block']?.value;
  const nestedBlock = cmsBlocks[nestedBlockId];

  const [isOpen, setIsOpen] = useState(true);
  const CollapseIcon = isOpen ? RemoveIcon : AddIcon;

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CollapsibleDetailsHeader onClick={handleClick}>
        <Typography component="h3" variant="h3">
          {cmsBlockFieldValues['Collapsible Details Header']?.value}
        </Typography>
        <CollapseIcon sx={{ color: 'secondary.main' }} />
      </CollapsibleDetailsHeader>
      <CollapsibleDetailsBody isOpen={isOpen}>
        <PureCmsBlock
          cmsBlock={nestedBlock}
          cmsBlocks={cmsBlocks}
          key={nestedBlock.id}
          {...other}
        />
      </CollapsibleDetailsBody>
    </>
  );
};

export default CollapsibleDetails;
