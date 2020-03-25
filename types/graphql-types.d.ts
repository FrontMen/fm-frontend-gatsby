export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  contentful_id?: Maybe<Scalars['String']>,
  file?: Maybe<ContentfulAssetFile>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  node_locale?: Maybe<Scalars['String']>,
  fixed?: Maybe<ContentfulFixed>,
  resolutions?: Maybe<ContentfulResolutions>,
  fluid?: Maybe<ContentfulFluid>,
  sizes?: Maybe<ContentfulSizes>,
  resize?: Maybe<ContentfulResize>,
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  toFormat?: Maybe<ContentfulImageFormat>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulAssetEdge>,
  nodes: Array<ContentfulAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulAssetGroupConnection>,
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulAssetFieldsEnum
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>,
  node: ContentfulAsset,
  previous?: Maybe<ContentfulAsset>,
};

export type ContentfulAssetFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'contentful_id' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>,
  details?: Maybe<ContentfulAssetFileDetails>,
  fileName?: Maybe<Scalars['String']>,
  contentType?: Maybe<Scalars['String']>,
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>,
  image?: Maybe<ContentfulAssetFileDetailsImage>,
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>,
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>,
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  contentType?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<ContentfulAssetFileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ContentfulFixedFilterInput>,
  resolutions?: Maybe<ContentfulResolutionsFilterInput>,
  fluid?: Maybe<ContentfulFluidFilterInput>,
  sizes?: Maybe<ContentfulSizesFilterInput>,
  resize?: Maybe<ContentfulResizeFilterInput>,
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulAssetEdge>,
  nodes: Array<ContentfulAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogPost = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<ContentfulBlogPostBodyRichTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulBlogPostSys>,
  node_locale?: Maybe<Scalars['String']>,
  childContentfulBlogPostBodyRichTextNode?: Maybe<ContentfulBlogPostBodyRichTextNode>,
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulBlogPostBodyRichTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  nodeType?: Maybe<Scalars['String']>,
  content?: Maybe<Array<Maybe<ContentfulBlogPostBodyRichTextNodeContent>>>,
  body?: Maybe<Scalars['String']>,
  json?: Maybe<Scalars['JSON']>,
};

export type ContentfulBlogPostBodyRichTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostBodyRichTextNodeEdge>,
  nodes: Array<ContentfulBlogPostBodyRichTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulBlogPostBodyRichTextNodeGroupConnection>,
};


export type ContentfulBlogPostBodyRichTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyRichTextNodeFieldsEnum
};


export type ContentfulBlogPostBodyRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulBlogPostBodyRichTextNodeFieldsEnum
};

export type ContentfulBlogPostBodyRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>,
  data?: Maybe<ContentfulBlogPostBodyRichTextNodeContentData>,
  content?: Maybe<Array<Maybe<ContentfulBlogPostBodyRichTextNodeContentContent>>>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<Maybe<ContentfulBlogPostBodyRichTextNodeContentContentMarks>>>,
  data?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentData>,
  content?: Maybe<Array<Maybe<ContentfulBlogPostBodyRichTextNodeContentContentContent>>>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentContent = {
  nodeType?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>,
  value?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentContentFilterInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentData = {
  uri?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentDataFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>,
  value?: Maybe<StringQueryOperatorInput>,
  marks?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentMarksFilterListInput>,
  data?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentDataFilterInput>,
  content?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentContentFilterListInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentFilterInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentMarks = {
  type?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentMarksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentContentMarksFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentMarksFilterInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentData = {
  target?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTarget>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataFilterInput = {
  target?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetFilterInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTarget = {
  sys?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSys>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetFilterInput = {
  sys?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysFilterInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSys = {
  space?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysSpace>,
  type?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  revision?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  environment?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysEnvironment>,
  contentful_id?: Maybe<Scalars['String']>,
};


export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysEnvironment = {
  sys?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysEnvironmentSys>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysEnvironmentFilterInput = {
  sys?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysEnvironmentSysFilterInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysEnvironmentSys = {
  id?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysEnvironmentSysFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysFilterInput = {
  space?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysSpaceFilterInput>,
  type?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  revision?: Maybe<IntQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  environment?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysEnvironmentFilterInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysSpace = {
  sys?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysSpaceSys>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysSpaceFilterInput = {
  sys?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataTargetSysSpaceSysFilterInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysSpaceSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostBodyRichTextNodeContentDataTargetSysSpaceSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>,
  data?: Maybe<ContentfulBlogPostBodyRichTextNodeContentDataFilterInput>,
  content?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentFilterListInput>,
};

export type ContentfulBlogPostBodyRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostBodyRichTextNodeContentFilterInput>,
};

export type ContentfulBlogPostBodyRichTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBodyRichTextNode>,
  node: ContentfulBlogPostBodyRichTextNode,
  previous?: Maybe<ContentfulBlogPostBodyRichTextNode>,
};

export type ContentfulBlogPostBodyRichTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'nodeType' |
  'content' |
  'content___nodeType' |
  'content___content' |
  'content___content___nodeType' |
  'content___content___value' |
  'content___content___marks' |
  'content___content___marks___type' |
  'content___content___data___uri' |
  'content___content___content' |
  'content___content___content___nodeType' |
  'content___content___content___value' |
  'body' |
  'json';

export type ContentfulBlogPostBodyRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  nodeType?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<ContentfulBlogPostBodyRichTextNodeContentFilterListInput>,
  body?: Maybe<StringQueryOperatorInput>,
  json?: Maybe<JsonQueryOperatorInput>,
};

export type ContentfulBlogPostBodyRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostBodyRichTextNodeEdge>,
  nodes: Array<ContentfulBlogPostBodyRichTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostBodyRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyRichTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostEdge>,
  nodes: Array<ContentfulBlogPost>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulBlogPostGroupConnection>,
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulBlogPostFieldsEnum
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>,
  node: ContentfulBlogPost,
  previous?: Maybe<ContentfulBlogPost>,
};

export type ContentfulBlogPostFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___nodeType' |
  'body___content' |
  'body___content___nodeType' |
  'body___content___content' |
  'body___content___content___nodeType' |
  'body___content___content___value' |
  'body___content___content___marks' |
  'body___content___content___content' |
  'body___body' |
  'body___json' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'childContentfulBlogPostBodyRichTextNode___id' |
  'childContentfulBlogPostBodyRichTextNode___parent___id' |
  'childContentfulBlogPostBodyRichTextNode___parent___parent___id' |
  'childContentfulBlogPostBodyRichTextNode___parent___parent___children' |
  'childContentfulBlogPostBodyRichTextNode___parent___children' |
  'childContentfulBlogPostBodyRichTextNode___parent___children___id' |
  'childContentfulBlogPostBodyRichTextNode___parent___children___children' |
  'childContentfulBlogPostBodyRichTextNode___parent___internal___content' |
  'childContentfulBlogPostBodyRichTextNode___parent___internal___contentDigest' |
  'childContentfulBlogPostBodyRichTextNode___parent___internal___description' |
  'childContentfulBlogPostBodyRichTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogPostBodyRichTextNode___parent___internal___ignoreType' |
  'childContentfulBlogPostBodyRichTextNode___parent___internal___mediaType' |
  'childContentfulBlogPostBodyRichTextNode___parent___internal___owner' |
  'childContentfulBlogPostBodyRichTextNode___parent___internal___type' |
  'childContentfulBlogPostBodyRichTextNode___children' |
  'childContentfulBlogPostBodyRichTextNode___children___id' |
  'childContentfulBlogPostBodyRichTextNode___children___parent___id' |
  'childContentfulBlogPostBodyRichTextNode___children___parent___children' |
  'childContentfulBlogPostBodyRichTextNode___children___children' |
  'childContentfulBlogPostBodyRichTextNode___children___children___id' |
  'childContentfulBlogPostBodyRichTextNode___children___children___children' |
  'childContentfulBlogPostBodyRichTextNode___children___internal___content' |
  'childContentfulBlogPostBodyRichTextNode___children___internal___contentDigest' |
  'childContentfulBlogPostBodyRichTextNode___children___internal___description' |
  'childContentfulBlogPostBodyRichTextNode___children___internal___fieldOwners' |
  'childContentfulBlogPostBodyRichTextNode___children___internal___ignoreType' |
  'childContentfulBlogPostBodyRichTextNode___children___internal___mediaType' |
  'childContentfulBlogPostBodyRichTextNode___children___internal___owner' |
  'childContentfulBlogPostBodyRichTextNode___children___internal___type' |
  'childContentfulBlogPostBodyRichTextNode___internal___content' |
  'childContentfulBlogPostBodyRichTextNode___internal___contentDigest' |
  'childContentfulBlogPostBodyRichTextNode___internal___description' |
  'childContentfulBlogPostBodyRichTextNode___internal___fieldOwners' |
  'childContentfulBlogPostBodyRichTextNode___internal___ignoreType' |
  'childContentfulBlogPostBodyRichTextNode___internal___mediaType' |
  'childContentfulBlogPostBodyRichTextNode___internal___owner' |
  'childContentfulBlogPostBodyRichTextNode___internal___type' |
  'childContentfulBlogPostBodyRichTextNode___nodeType' |
  'childContentfulBlogPostBodyRichTextNode___content' |
  'childContentfulBlogPostBodyRichTextNode___content___nodeType' |
  'childContentfulBlogPostBodyRichTextNode___content___content' |
  'childContentfulBlogPostBodyRichTextNode___content___content___nodeType' |
  'childContentfulBlogPostBodyRichTextNode___content___content___value' |
  'childContentfulBlogPostBodyRichTextNode___content___content___marks' |
  'childContentfulBlogPostBodyRichTextNode___content___content___content' |
  'childContentfulBlogPostBodyRichTextNode___body' |
  'childContentfulBlogPostBodyRichTextNode___json';

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogPostSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  childContentfulBlogPostBodyRichTextNode?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>,
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogPostEdge>,
  nodes: Array<ContentfulBlogPost>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogPostSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulBlogPostSysContentType>,
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>,
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>,
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>,
};

export type ContentfulClient = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  layout___set_of_four?: Maybe<Array<Maybe<ContentfulLayoutSetOfFour>>>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulClientSys>,
  node_locale?: Maybe<Scalars['String']>,
};


export type ContentfulClientCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulClientUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulClientConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulClientEdge>,
  nodes: Array<ContentfulClient>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulClientGroupConnection>,
};


export type ContentfulClientConnectionDistinctArgs = {
  field: ContentfulClientFieldsEnum
};


export type ContentfulClientConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulClientFieldsEnum
};

export type ContentfulClientEdge = {
  next?: Maybe<ContentfulClient>,
  node: ContentfulClient,
  previous?: Maybe<ContentfulClient>,
};

export type ContentfulClientFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'link' |
  'layout___set_of_four' |
  'layout___set_of_four___id' |
  'layout___set_of_four___parent___id' |
  'layout___set_of_four___parent___parent___id' |
  'layout___set_of_four___parent___parent___children' |
  'layout___set_of_four___parent___children' |
  'layout___set_of_four___parent___children___id' |
  'layout___set_of_four___parent___children___children' |
  'layout___set_of_four___parent___internal___content' |
  'layout___set_of_four___parent___internal___contentDigest' |
  'layout___set_of_four___parent___internal___description' |
  'layout___set_of_four___parent___internal___fieldOwners' |
  'layout___set_of_four___parent___internal___ignoreType' |
  'layout___set_of_four___parent___internal___mediaType' |
  'layout___set_of_four___parent___internal___owner' |
  'layout___set_of_four___parent___internal___type' |
  'layout___set_of_four___children' |
  'layout___set_of_four___children___id' |
  'layout___set_of_four___children___parent___id' |
  'layout___set_of_four___children___parent___children' |
  'layout___set_of_four___children___children' |
  'layout___set_of_four___children___children___id' |
  'layout___set_of_four___children___children___children' |
  'layout___set_of_four___children___internal___content' |
  'layout___set_of_four___children___internal___contentDigest' |
  'layout___set_of_four___children___internal___description' |
  'layout___set_of_four___children___internal___fieldOwners' |
  'layout___set_of_four___children___internal___ignoreType' |
  'layout___set_of_four___children___internal___mediaType' |
  'layout___set_of_four___children___internal___owner' |
  'layout___set_of_four___children___internal___type' |
  'layout___set_of_four___internal___content' |
  'layout___set_of_four___internal___contentDigest' |
  'layout___set_of_four___internal___description' |
  'layout___set_of_four___internal___fieldOwners' |
  'layout___set_of_four___internal___ignoreType' |
  'layout___set_of_four___internal___mediaType' |
  'layout___set_of_four___internal___owner' |
  'layout___set_of_four___internal___type' |
  'layout___set_of_four___title' |
  'layout___set_of_four___setItems' |
  'layout___set_of_four___setItems___id' |
  'layout___set_of_four___setItems___parent___id' |
  'layout___set_of_four___setItems___parent___children' |
  'layout___set_of_four___setItems___children' |
  'layout___set_of_four___setItems___children___id' |
  'layout___set_of_four___setItems___children___children' |
  'layout___set_of_four___setItems___internal___content' |
  'layout___set_of_four___setItems___internal___contentDigest' |
  'layout___set_of_four___setItems___internal___description' |
  'layout___set_of_four___setItems___internal___fieldOwners' |
  'layout___set_of_four___setItems___internal___ignoreType' |
  'layout___set_of_four___setItems___internal___mediaType' |
  'layout___set_of_four___setItems___internal___owner' |
  'layout___set_of_four___setItems___internal___type' |
  'layout___set_of_four___setItems___title' |
  'layout___set_of_four___setItems___link' |
  'layout___set_of_four___setItems___layout___set_of_four' |
  'layout___set_of_four___setItems___layout___set_of_four___id' |
  'layout___set_of_four___setItems___layout___set_of_four___children' |
  'layout___set_of_four___setItems___layout___set_of_four___title' |
  'layout___set_of_four___setItems___layout___set_of_four___setItems' |
  'layout___set_of_four___setItems___layout___set_of_four___layout' |
  'layout___set_of_four___setItems___layout___set_of_four___spaceId' |
  'layout___set_of_four___setItems___layout___set_of_four___contentful_id' |
  'layout___set_of_four___setItems___layout___set_of_four___createdAt' |
  'layout___set_of_four___setItems___layout___set_of_four___updatedAt' |
  'layout___set_of_four___setItems___layout___set_of_four___node_locale' |
  'layout___set_of_four___setItems___spaceId' |
  'layout___set_of_four___setItems___contentful_id' |
  'layout___set_of_four___setItems___createdAt' |
  'layout___set_of_four___setItems___updatedAt' |
  'layout___set_of_four___setItems___sys___revision' |
  'layout___set_of_four___setItems___node_locale' |
  'layout___set_of_four___layout' |
  'layout___set_of_four___layout___id' |
  'layout___set_of_four___layout___parent___id' |
  'layout___set_of_four___layout___parent___children' |
  'layout___set_of_four___layout___children' |
  'layout___set_of_four___layout___children___id' |
  'layout___set_of_four___layout___children___children' |
  'layout___set_of_four___layout___internal___content' |
  'layout___set_of_four___layout___internal___contentDigest' |
  'layout___set_of_four___layout___internal___description' |
  'layout___set_of_four___layout___internal___fieldOwners' |
  'layout___set_of_four___layout___internal___ignoreType' |
  'layout___set_of_four___layout___internal___mediaType' |
  'layout___set_of_four___layout___internal___owner' |
  'layout___set_of_four___layout___internal___type' |
  'layout___set_of_four___layout___title' |
  'layout___set_of_four___layout___slug' |
  'layout___set_of_four___layout___spaceId' |
  'layout___set_of_four___layout___contentful_id' |
  'layout___set_of_four___layout___createdAt' |
  'layout___set_of_four___layout___updatedAt' |
  'layout___set_of_four___layout___sys___revision' |
  'layout___set_of_four___layout___node_locale' |
  'layout___set_of_four___spaceId' |
  'layout___set_of_four___contentful_id' |
  'layout___set_of_four___createdAt' |
  'layout___set_of_four___updatedAt' |
  'layout___set_of_four___node_locale' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'sys___revision' |
  'node_locale';

export type ContentfulClientFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  layout___set_of_four?: Maybe<ContentfulLayoutSetOfFourFilterListInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulClientSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulClientFilterListInput = {
  elemMatch?: Maybe<ContentfulClientFilterInput>,
};

export type ContentfulClientGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulClientEdge>,
  nodes: Array<ContentfulClient>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulClientSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulClientFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulClientSys = {
  contentType?: Maybe<ContentfulClientSysContentType>,
  revision?: Maybe<Scalars['Int']>,
};

export type ContentfulClientSysContentType = {
  sys?: Maybe<ContentfulClientSysContentTypeSys>,
};

export type ContentfulClientSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulClientSysContentTypeSysFilterInput>,
};

export type ContentfulClientSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulClientSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulClientSysFilterInput = {
  contentType?: Maybe<ContentfulClientSysContentTypeFilterInput>,
  revision?: Maybe<IntQueryOperatorInput>,
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  displayField?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulContentTypeEdge>,
  nodes: Array<ContentfulContentType>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulContentTypeGroupConnection>,
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulContentTypeFieldsEnum
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>,
  node: ContentfulContentType,
  previous?: Maybe<ContentfulContentType>,
};

export type ContentfulContentTypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'displayField' |
  'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  displayField?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulContentTypeEdge>,
  nodes: Array<ContentfulContentType>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulImageCropFocus = 
  'TOP' |
  'TOP_LEFT' |
  'TOP_RIGHT' |
  'BOTTOM' |
  'BOTTOM_RIGHT' |
  'BOTTOM_LEFT' |
  'RIGHT' |
  'LEFT' |
  'FACE' |
  'FACES' |
  'CENTER';

export type ContentfulImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ContentfulLayout = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  contentModules?: Maybe<Array<Maybe<ContentfulLayoutCallToActionContentfulLayoutCopyContentfulLayoutHeroImageContentfulLayoutSetOfFourUnion>>>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulLayoutSys>,
  node_locale?: Maybe<Scalars['String']>,
};


export type ContentfulLayoutCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulLayoutUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulLayoutCallToAction = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  payoff?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulLayoutCallToActionSys>,
  node_locale?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  layout?: Maybe<Array<Maybe<ContentfulLayout>>>,
};


export type ContentfulLayoutCallToActionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulLayoutCallToActionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulLayoutCallToActionConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutCallToActionEdge>,
  nodes: Array<ContentfulLayoutCallToAction>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulLayoutCallToActionGroupConnection>,
};


export type ContentfulLayoutCallToActionConnectionDistinctArgs = {
  field: ContentfulLayoutCallToActionFieldsEnum
};


export type ContentfulLayoutCallToActionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulLayoutCallToActionFieldsEnum
};

export type ContentfulLayoutCallToActionContentfulLayoutCopyContentfulLayoutHeroImageContentfulLayoutSetOfFourUnion = ContentfulLayoutCallToAction | ContentfulLayoutCopy | ContentfulLayoutHeroImage | ContentfulLayoutSetOfFour;

export type ContentfulLayoutCallToActionEdge = {
  next?: Maybe<ContentfulLayoutCallToAction>,
  node: ContentfulLayoutCallToAction,
  previous?: Maybe<ContentfulLayoutCallToAction>,
};

export type ContentfulLayoutCallToActionFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'payoff' |
  'url' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'label' |
  'layout' |
  'layout___id' |
  'layout___parent___id' |
  'layout___parent___parent___id' |
  'layout___parent___parent___children' |
  'layout___parent___children' |
  'layout___parent___children___id' |
  'layout___parent___children___children' |
  'layout___parent___internal___content' |
  'layout___parent___internal___contentDigest' |
  'layout___parent___internal___description' |
  'layout___parent___internal___fieldOwners' |
  'layout___parent___internal___ignoreType' |
  'layout___parent___internal___mediaType' |
  'layout___parent___internal___owner' |
  'layout___parent___internal___type' |
  'layout___children' |
  'layout___children___id' |
  'layout___children___parent___id' |
  'layout___children___parent___children' |
  'layout___children___children' |
  'layout___children___children___id' |
  'layout___children___children___children' |
  'layout___children___internal___content' |
  'layout___children___internal___contentDigest' |
  'layout___children___internal___description' |
  'layout___children___internal___fieldOwners' |
  'layout___children___internal___ignoreType' |
  'layout___children___internal___mediaType' |
  'layout___children___internal___owner' |
  'layout___children___internal___type' |
  'layout___internal___content' |
  'layout___internal___contentDigest' |
  'layout___internal___description' |
  'layout___internal___fieldOwners' |
  'layout___internal___ignoreType' |
  'layout___internal___mediaType' |
  'layout___internal___owner' |
  'layout___internal___type' |
  'layout___title' |
  'layout___slug' |
  'layout___spaceId' |
  'layout___contentful_id' |
  'layout___createdAt' |
  'layout___updatedAt' |
  'layout___sys___revision' |
  'layout___node_locale';

export type ContentfulLayoutCallToActionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  payoff?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutCallToActionSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  layout?: Maybe<ContentfulLayoutFilterListInput>,
};

export type ContentfulLayoutCallToActionGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutCallToActionEdge>,
  nodes: Array<ContentfulLayoutCallToAction>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutCallToActionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLayoutCallToActionFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulLayoutCallToActionSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulLayoutCallToActionSysContentType>,
};

export type ContentfulLayoutCallToActionSysContentType = {
  sys?: Maybe<ContentfulLayoutCallToActionSysContentTypeSys>,
};

export type ContentfulLayoutCallToActionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLayoutCallToActionSysContentTypeSysFilterInput>,
};

export type ContentfulLayoutCallToActionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutCallToActionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutCallToActionSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulLayoutCallToActionSysContentTypeFilterInput>,
};

export type ContentfulLayoutConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutEdge>,
  nodes: Array<ContentfulLayout>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulLayoutGroupConnection>,
};


export type ContentfulLayoutConnectionDistinctArgs = {
  field: ContentfulLayoutFieldsEnum
};


export type ContentfulLayoutConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulLayoutFieldsEnum
};

export type ContentfulLayoutCopy = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  headline?: Maybe<Scalars['String']>,
  layout?: Maybe<Array<Maybe<ContentfulLayout>>>,
  copy?: Maybe<ContentfulLayoutCopyCopyTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulLayoutCopySys>,
  node_locale?: Maybe<Scalars['String']>,
  appearance?: Maybe<Scalars['String']>,
  ctaTitle?: Maybe<Scalars['String']>,
  ctaLink?: Maybe<Scalars['String']>,
  childContentfulLayoutCopyCopyTextNode?: Maybe<ContentfulLayoutCopyCopyTextNode>,
};


export type ContentfulLayoutCopyCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulLayoutCopyUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulLayoutCopyConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutCopyEdge>,
  nodes: Array<ContentfulLayoutCopy>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulLayoutCopyGroupConnection>,
};


export type ContentfulLayoutCopyConnectionDistinctArgs = {
  field: ContentfulLayoutCopyFieldsEnum
};


export type ContentfulLayoutCopyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulLayoutCopyFieldsEnum
};

export type ContentfulLayoutCopyCopyTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  copy?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutCopyCopyTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutCopyCopyTextNodeEdge>,
  nodes: Array<ContentfulLayoutCopyCopyTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulLayoutCopyCopyTextNodeGroupConnection>,
};


export type ContentfulLayoutCopyCopyTextNodeConnectionDistinctArgs = {
  field: ContentfulLayoutCopyCopyTextNodeFieldsEnum
};


export type ContentfulLayoutCopyCopyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulLayoutCopyCopyTextNodeFieldsEnum
};

export type ContentfulLayoutCopyCopyTextNodeEdge = {
  next?: Maybe<ContentfulLayoutCopyCopyTextNode>,
  node: ContentfulLayoutCopyCopyTextNode,
  previous?: Maybe<ContentfulLayoutCopyCopyTextNode>,
};

export type ContentfulLayoutCopyCopyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'copy';

export type ContentfulLayoutCopyCopyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  copy?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutCopyCopyTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutCopyCopyTextNodeEdge>,
  nodes: Array<ContentfulLayoutCopyCopyTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutCopyCopyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLayoutCopyCopyTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulLayoutCopyEdge = {
  next?: Maybe<ContentfulLayoutCopy>,
  node: ContentfulLayoutCopy,
  previous?: Maybe<ContentfulLayoutCopy>,
};

export type ContentfulLayoutCopyFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'headline' |
  'layout' |
  'layout___id' |
  'layout___parent___id' |
  'layout___parent___parent___id' |
  'layout___parent___parent___children' |
  'layout___parent___children' |
  'layout___parent___children___id' |
  'layout___parent___children___children' |
  'layout___parent___internal___content' |
  'layout___parent___internal___contentDigest' |
  'layout___parent___internal___description' |
  'layout___parent___internal___fieldOwners' |
  'layout___parent___internal___ignoreType' |
  'layout___parent___internal___mediaType' |
  'layout___parent___internal___owner' |
  'layout___parent___internal___type' |
  'layout___children' |
  'layout___children___id' |
  'layout___children___parent___id' |
  'layout___children___parent___children' |
  'layout___children___children' |
  'layout___children___children___id' |
  'layout___children___children___children' |
  'layout___children___internal___content' |
  'layout___children___internal___contentDigest' |
  'layout___children___internal___description' |
  'layout___children___internal___fieldOwners' |
  'layout___children___internal___ignoreType' |
  'layout___children___internal___mediaType' |
  'layout___children___internal___owner' |
  'layout___children___internal___type' |
  'layout___internal___content' |
  'layout___internal___contentDigest' |
  'layout___internal___description' |
  'layout___internal___fieldOwners' |
  'layout___internal___ignoreType' |
  'layout___internal___mediaType' |
  'layout___internal___owner' |
  'layout___internal___type' |
  'layout___title' |
  'layout___slug' |
  'layout___spaceId' |
  'layout___contentful_id' |
  'layout___createdAt' |
  'layout___updatedAt' |
  'layout___sys___revision' |
  'layout___node_locale' |
  'copy___id' |
  'copy___parent___id' |
  'copy___parent___parent___id' |
  'copy___parent___parent___children' |
  'copy___parent___children' |
  'copy___parent___children___id' |
  'copy___parent___children___children' |
  'copy___parent___internal___content' |
  'copy___parent___internal___contentDigest' |
  'copy___parent___internal___description' |
  'copy___parent___internal___fieldOwners' |
  'copy___parent___internal___ignoreType' |
  'copy___parent___internal___mediaType' |
  'copy___parent___internal___owner' |
  'copy___parent___internal___type' |
  'copy___children' |
  'copy___children___id' |
  'copy___children___parent___id' |
  'copy___children___parent___children' |
  'copy___children___children' |
  'copy___children___children___id' |
  'copy___children___children___children' |
  'copy___children___internal___content' |
  'copy___children___internal___contentDigest' |
  'copy___children___internal___description' |
  'copy___children___internal___fieldOwners' |
  'copy___children___internal___ignoreType' |
  'copy___children___internal___mediaType' |
  'copy___children___internal___owner' |
  'copy___children___internal___type' |
  'copy___internal___content' |
  'copy___internal___contentDigest' |
  'copy___internal___description' |
  'copy___internal___fieldOwners' |
  'copy___internal___ignoreType' |
  'copy___internal___mediaType' |
  'copy___internal___owner' |
  'copy___internal___type' |
  'copy___copy' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'appearance' |
  'ctaTitle' |
  'ctaLink' |
  'childContentfulLayoutCopyCopyTextNode___id' |
  'childContentfulLayoutCopyCopyTextNode___parent___id' |
  'childContentfulLayoutCopyCopyTextNode___parent___parent___id' |
  'childContentfulLayoutCopyCopyTextNode___parent___parent___children' |
  'childContentfulLayoutCopyCopyTextNode___parent___children' |
  'childContentfulLayoutCopyCopyTextNode___parent___children___id' |
  'childContentfulLayoutCopyCopyTextNode___parent___children___children' |
  'childContentfulLayoutCopyCopyTextNode___parent___internal___content' |
  'childContentfulLayoutCopyCopyTextNode___parent___internal___contentDigest' |
  'childContentfulLayoutCopyCopyTextNode___parent___internal___description' |
  'childContentfulLayoutCopyCopyTextNode___parent___internal___fieldOwners' |
  'childContentfulLayoutCopyCopyTextNode___parent___internal___ignoreType' |
  'childContentfulLayoutCopyCopyTextNode___parent___internal___mediaType' |
  'childContentfulLayoutCopyCopyTextNode___parent___internal___owner' |
  'childContentfulLayoutCopyCopyTextNode___parent___internal___type' |
  'childContentfulLayoutCopyCopyTextNode___children' |
  'childContentfulLayoutCopyCopyTextNode___children___id' |
  'childContentfulLayoutCopyCopyTextNode___children___parent___id' |
  'childContentfulLayoutCopyCopyTextNode___children___parent___children' |
  'childContentfulLayoutCopyCopyTextNode___children___children' |
  'childContentfulLayoutCopyCopyTextNode___children___children___id' |
  'childContentfulLayoutCopyCopyTextNode___children___children___children' |
  'childContentfulLayoutCopyCopyTextNode___children___internal___content' |
  'childContentfulLayoutCopyCopyTextNode___children___internal___contentDigest' |
  'childContentfulLayoutCopyCopyTextNode___children___internal___description' |
  'childContentfulLayoutCopyCopyTextNode___children___internal___fieldOwners' |
  'childContentfulLayoutCopyCopyTextNode___children___internal___ignoreType' |
  'childContentfulLayoutCopyCopyTextNode___children___internal___mediaType' |
  'childContentfulLayoutCopyCopyTextNode___children___internal___owner' |
  'childContentfulLayoutCopyCopyTextNode___children___internal___type' |
  'childContentfulLayoutCopyCopyTextNode___internal___content' |
  'childContentfulLayoutCopyCopyTextNode___internal___contentDigest' |
  'childContentfulLayoutCopyCopyTextNode___internal___description' |
  'childContentfulLayoutCopyCopyTextNode___internal___fieldOwners' |
  'childContentfulLayoutCopyCopyTextNode___internal___ignoreType' |
  'childContentfulLayoutCopyCopyTextNode___internal___mediaType' |
  'childContentfulLayoutCopyCopyTextNode___internal___owner' |
  'childContentfulLayoutCopyCopyTextNode___internal___type' |
  'childContentfulLayoutCopyCopyTextNode___copy';

export type ContentfulLayoutCopyFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  headline?: Maybe<StringQueryOperatorInput>,
  layout?: Maybe<ContentfulLayoutFilterListInput>,
  copy?: Maybe<ContentfulLayoutCopyCopyTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutCopySysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  appearance?: Maybe<StringQueryOperatorInput>,
  ctaTitle?: Maybe<StringQueryOperatorInput>,
  ctaLink?: Maybe<StringQueryOperatorInput>,
  childContentfulLayoutCopyCopyTextNode?: Maybe<ContentfulLayoutCopyCopyTextNodeFilterInput>,
};

export type ContentfulLayoutCopyGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutCopyEdge>,
  nodes: Array<ContentfulLayoutCopy>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutCopySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLayoutCopyFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulLayoutCopySys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulLayoutCopySysContentType>,
};

export type ContentfulLayoutCopySysContentType = {
  sys?: Maybe<ContentfulLayoutCopySysContentTypeSys>,
};

export type ContentfulLayoutCopySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLayoutCopySysContentTypeSysFilterInput>,
};

export type ContentfulLayoutCopySysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutCopySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutCopySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulLayoutCopySysContentTypeFilterInput>,
};

export type ContentfulLayoutEdge = {
  next?: Maybe<ContentfulLayout>,
  node: ContentfulLayout,
  previous?: Maybe<ContentfulLayout>,
};

export type ContentfulLayoutFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'slug' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulLayoutFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutFilterListInput = {
  elemMatch?: Maybe<ContentfulLayoutFilterInput>,
};

export type ContentfulLayoutGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutEdge>,
  nodes: Array<ContentfulLayout>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutHeroImage = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  headline?: Maybe<Scalars['String']>,
  backgroundImage?: Maybe<ContentfulAsset>,
  layout?: Maybe<Array<Maybe<ContentfulLayout>>>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulLayoutHeroImageSys>,
  node_locale?: Maybe<Scalars['String']>,
};


export type ContentfulLayoutHeroImageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulLayoutHeroImageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulLayoutHeroImageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutHeroImageEdge>,
  nodes: Array<ContentfulLayoutHeroImage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulLayoutHeroImageGroupConnection>,
};


export type ContentfulLayoutHeroImageConnectionDistinctArgs = {
  field: ContentfulLayoutHeroImageFieldsEnum
};


export type ContentfulLayoutHeroImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulLayoutHeroImageFieldsEnum
};

export type ContentfulLayoutHeroImageEdge = {
  next?: Maybe<ContentfulLayoutHeroImage>,
  node: ContentfulLayoutHeroImage,
  previous?: Maybe<ContentfulLayoutHeroImage>,
};

export type ContentfulLayoutHeroImageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'headline' |
  'backgroundImage___id' |
  'backgroundImage___parent___id' |
  'backgroundImage___parent___parent___id' |
  'backgroundImage___parent___parent___children' |
  'backgroundImage___parent___children' |
  'backgroundImage___parent___children___id' |
  'backgroundImage___parent___children___children' |
  'backgroundImage___parent___internal___content' |
  'backgroundImage___parent___internal___contentDigest' |
  'backgroundImage___parent___internal___description' |
  'backgroundImage___parent___internal___fieldOwners' |
  'backgroundImage___parent___internal___ignoreType' |
  'backgroundImage___parent___internal___mediaType' |
  'backgroundImage___parent___internal___owner' |
  'backgroundImage___parent___internal___type' |
  'backgroundImage___children' |
  'backgroundImage___children___id' |
  'backgroundImage___children___parent___id' |
  'backgroundImage___children___parent___children' |
  'backgroundImage___children___children' |
  'backgroundImage___children___children___id' |
  'backgroundImage___children___children___children' |
  'backgroundImage___children___internal___content' |
  'backgroundImage___children___internal___contentDigest' |
  'backgroundImage___children___internal___description' |
  'backgroundImage___children___internal___fieldOwners' |
  'backgroundImage___children___internal___ignoreType' |
  'backgroundImage___children___internal___mediaType' |
  'backgroundImage___children___internal___owner' |
  'backgroundImage___children___internal___type' |
  'backgroundImage___internal___content' |
  'backgroundImage___internal___contentDigest' |
  'backgroundImage___internal___description' |
  'backgroundImage___internal___fieldOwners' |
  'backgroundImage___internal___ignoreType' |
  'backgroundImage___internal___mediaType' |
  'backgroundImage___internal___owner' |
  'backgroundImage___internal___type' |
  'backgroundImage___contentful_id' |
  'backgroundImage___file___url' |
  'backgroundImage___file___details___size' |
  'backgroundImage___file___fileName' |
  'backgroundImage___file___contentType' |
  'backgroundImage___title' |
  'backgroundImage___description' |
  'backgroundImage___node_locale' |
  'backgroundImage___fixed___base64' |
  'backgroundImage___fixed___tracedSVG' |
  'backgroundImage___fixed___aspectRatio' |
  'backgroundImage___fixed___width' |
  'backgroundImage___fixed___height' |
  'backgroundImage___fixed___src' |
  'backgroundImage___fixed___srcSet' |
  'backgroundImage___fixed___srcWebp' |
  'backgroundImage___fixed___srcSetWebp' |
  'backgroundImage___resolutions___base64' |
  'backgroundImage___resolutions___tracedSVG' |
  'backgroundImage___resolutions___aspectRatio' |
  'backgroundImage___resolutions___width' |
  'backgroundImage___resolutions___height' |
  'backgroundImage___resolutions___src' |
  'backgroundImage___resolutions___srcSet' |
  'backgroundImage___resolutions___srcWebp' |
  'backgroundImage___resolutions___srcSetWebp' |
  'backgroundImage___fluid___base64' |
  'backgroundImage___fluid___tracedSVG' |
  'backgroundImage___fluid___aspectRatio' |
  'backgroundImage___fluid___src' |
  'backgroundImage___fluid___srcSet' |
  'backgroundImage___fluid___srcWebp' |
  'backgroundImage___fluid___srcSetWebp' |
  'backgroundImage___fluid___sizes' |
  'backgroundImage___sizes___base64' |
  'backgroundImage___sizes___tracedSVG' |
  'backgroundImage___sizes___aspectRatio' |
  'backgroundImage___sizes___src' |
  'backgroundImage___sizes___srcSet' |
  'backgroundImage___sizes___srcWebp' |
  'backgroundImage___sizes___srcSetWebp' |
  'backgroundImage___sizes___sizes' |
  'backgroundImage___resize___base64' |
  'backgroundImage___resize___tracedSVG' |
  'backgroundImage___resize___src' |
  'backgroundImage___resize___width' |
  'backgroundImage___resize___height' |
  'backgroundImage___resize___aspectRatio' |
  'layout' |
  'layout___id' |
  'layout___parent___id' |
  'layout___parent___parent___id' |
  'layout___parent___parent___children' |
  'layout___parent___children' |
  'layout___parent___children___id' |
  'layout___parent___children___children' |
  'layout___parent___internal___content' |
  'layout___parent___internal___contentDigest' |
  'layout___parent___internal___description' |
  'layout___parent___internal___fieldOwners' |
  'layout___parent___internal___ignoreType' |
  'layout___parent___internal___mediaType' |
  'layout___parent___internal___owner' |
  'layout___parent___internal___type' |
  'layout___children' |
  'layout___children___id' |
  'layout___children___parent___id' |
  'layout___children___parent___children' |
  'layout___children___children' |
  'layout___children___children___id' |
  'layout___children___children___children' |
  'layout___children___internal___content' |
  'layout___children___internal___contentDigest' |
  'layout___children___internal___description' |
  'layout___children___internal___fieldOwners' |
  'layout___children___internal___ignoreType' |
  'layout___children___internal___mediaType' |
  'layout___children___internal___owner' |
  'layout___children___internal___type' |
  'layout___internal___content' |
  'layout___internal___contentDigest' |
  'layout___internal___description' |
  'layout___internal___fieldOwners' |
  'layout___internal___ignoreType' |
  'layout___internal___mediaType' |
  'layout___internal___owner' |
  'layout___internal___type' |
  'layout___title' |
  'layout___slug' |
  'layout___spaceId' |
  'layout___contentful_id' |
  'layout___createdAt' |
  'layout___updatedAt' |
  'layout___sys___revision' |
  'layout___node_locale' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulLayoutHeroImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  headline?: Maybe<StringQueryOperatorInput>,
  backgroundImage?: Maybe<ContentfulAssetFilterInput>,
  layout?: Maybe<ContentfulLayoutFilterListInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutHeroImageSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutHeroImageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutHeroImageEdge>,
  nodes: Array<ContentfulLayoutHeroImage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutHeroImageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLayoutHeroImageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulLayoutHeroImageSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulLayoutHeroImageSysContentType>,
};

export type ContentfulLayoutHeroImageSysContentType = {
  sys?: Maybe<ContentfulLayoutHeroImageSysContentTypeSys>,
};

export type ContentfulLayoutHeroImageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLayoutHeroImageSysContentTypeSysFilterInput>,
};

export type ContentfulLayoutHeroImageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutHeroImageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutHeroImageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulLayoutHeroImageSysContentTypeFilterInput>,
};

export type ContentfulLayoutSetOfFour = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  setItems?: Maybe<Array<Maybe<ContentfulClient>>>,
  layout?: Maybe<Array<Maybe<ContentfulLayout>>>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulLayoutSetOfFourSys>,
  node_locale?: Maybe<Scalars['String']>,
};


export type ContentfulLayoutSetOfFourCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulLayoutSetOfFourUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulLayoutSetOfFourConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutSetOfFourEdge>,
  nodes: Array<ContentfulLayoutSetOfFour>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulLayoutSetOfFourGroupConnection>,
};


export type ContentfulLayoutSetOfFourConnectionDistinctArgs = {
  field: ContentfulLayoutSetOfFourFieldsEnum
};


export type ContentfulLayoutSetOfFourConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulLayoutSetOfFourFieldsEnum
};

export type ContentfulLayoutSetOfFourEdge = {
  next?: Maybe<ContentfulLayoutSetOfFour>,
  node: ContentfulLayoutSetOfFour,
  previous?: Maybe<ContentfulLayoutSetOfFour>,
};

export type ContentfulLayoutSetOfFourFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'setItems' |
  'setItems___id' |
  'setItems___parent___id' |
  'setItems___parent___parent___id' |
  'setItems___parent___parent___children' |
  'setItems___parent___children' |
  'setItems___parent___children___id' |
  'setItems___parent___children___children' |
  'setItems___parent___internal___content' |
  'setItems___parent___internal___contentDigest' |
  'setItems___parent___internal___description' |
  'setItems___parent___internal___fieldOwners' |
  'setItems___parent___internal___ignoreType' |
  'setItems___parent___internal___mediaType' |
  'setItems___parent___internal___owner' |
  'setItems___parent___internal___type' |
  'setItems___children' |
  'setItems___children___id' |
  'setItems___children___parent___id' |
  'setItems___children___parent___children' |
  'setItems___children___children' |
  'setItems___children___children___id' |
  'setItems___children___children___children' |
  'setItems___children___internal___content' |
  'setItems___children___internal___contentDigest' |
  'setItems___children___internal___description' |
  'setItems___children___internal___fieldOwners' |
  'setItems___children___internal___ignoreType' |
  'setItems___children___internal___mediaType' |
  'setItems___children___internal___owner' |
  'setItems___children___internal___type' |
  'setItems___internal___content' |
  'setItems___internal___contentDigest' |
  'setItems___internal___description' |
  'setItems___internal___fieldOwners' |
  'setItems___internal___ignoreType' |
  'setItems___internal___mediaType' |
  'setItems___internal___owner' |
  'setItems___internal___type' |
  'setItems___title' |
  'setItems___link' |
  'setItems___layout___set_of_four' |
  'setItems___layout___set_of_four___id' |
  'setItems___layout___set_of_four___parent___id' |
  'setItems___layout___set_of_four___parent___children' |
  'setItems___layout___set_of_four___children' |
  'setItems___layout___set_of_four___children___id' |
  'setItems___layout___set_of_four___children___children' |
  'setItems___layout___set_of_four___internal___content' |
  'setItems___layout___set_of_four___internal___contentDigest' |
  'setItems___layout___set_of_four___internal___description' |
  'setItems___layout___set_of_four___internal___fieldOwners' |
  'setItems___layout___set_of_four___internal___ignoreType' |
  'setItems___layout___set_of_four___internal___mediaType' |
  'setItems___layout___set_of_four___internal___owner' |
  'setItems___layout___set_of_four___internal___type' |
  'setItems___layout___set_of_four___title' |
  'setItems___layout___set_of_four___setItems' |
  'setItems___layout___set_of_four___setItems___id' |
  'setItems___layout___set_of_four___setItems___children' |
  'setItems___layout___set_of_four___setItems___title' |
  'setItems___layout___set_of_four___setItems___link' |
  'setItems___layout___set_of_four___setItems___layout___set_of_four' |
  'setItems___layout___set_of_four___setItems___spaceId' |
  'setItems___layout___set_of_four___setItems___contentful_id' |
  'setItems___layout___set_of_four___setItems___createdAt' |
  'setItems___layout___set_of_four___setItems___updatedAt' |
  'setItems___layout___set_of_four___setItems___node_locale' |
  'setItems___layout___set_of_four___layout' |
  'setItems___layout___set_of_four___layout___id' |
  'setItems___layout___set_of_four___layout___children' |
  'setItems___layout___set_of_four___layout___title' |
  'setItems___layout___set_of_four___layout___slug' |
  'setItems___layout___set_of_four___layout___spaceId' |
  'setItems___layout___set_of_four___layout___contentful_id' |
  'setItems___layout___set_of_four___layout___createdAt' |
  'setItems___layout___set_of_four___layout___updatedAt' |
  'setItems___layout___set_of_four___layout___node_locale' |
  'setItems___layout___set_of_four___spaceId' |
  'setItems___layout___set_of_four___contentful_id' |
  'setItems___layout___set_of_four___createdAt' |
  'setItems___layout___set_of_four___updatedAt' |
  'setItems___layout___set_of_four___node_locale' |
  'setItems___spaceId' |
  'setItems___contentful_id' |
  'setItems___createdAt' |
  'setItems___updatedAt' |
  'setItems___sys___revision' |
  'setItems___node_locale' |
  'layout' |
  'layout___id' |
  'layout___parent___id' |
  'layout___parent___parent___id' |
  'layout___parent___parent___children' |
  'layout___parent___children' |
  'layout___parent___children___id' |
  'layout___parent___children___children' |
  'layout___parent___internal___content' |
  'layout___parent___internal___contentDigest' |
  'layout___parent___internal___description' |
  'layout___parent___internal___fieldOwners' |
  'layout___parent___internal___ignoreType' |
  'layout___parent___internal___mediaType' |
  'layout___parent___internal___owner' |
  'layout___parent___internal___type' |
  'layout___children' |
  'layout___children___id' |
  'layout___children___parent___id' |
  'layout___children___parent___children' |
  'layout___children___children' |
  'layout___children___children___id' |
  'layout___children___children___children' |
  'layout___children___internal___content' |
  'layout___children___internal___contentDigest' |
  'layout___children___internal___description' |
  'layout___children___internal___fieldOwners' |
  'layout___children___internal___ignoreType' |
  'layout___children___internal___mediaType' |
  'layout___children___internal___owner' |
  'layout___children___internal___type' |
  'layout___internal___content' |
  'layout___internal___contentDigest' |
  'layout___internal___description' |
  'layout___internal___fieldOwners' |
  'layout___internal___ignoreType' |
  'layout___internal___mediaType' |
  'layout___internal___owner' |
  'layout___internal___type' |
  'layout___title' |
  'layout___slug' |
  'layout___spaceId' |
  'layout___contentful_id' |
  'layout___createdAt' |
  'layout___updatedAt' |
  'layout___sys___revision' |
  'layout___node_locale' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulLayoutSetOfFourFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  setItems?: Maybe<ContentfulClientFilterListInput>,
  layout?: Maybe<ContentfulLayoutFilterListInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutSetOfFourSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutSetOfFourFilterListInput = {
  elemMatch?: Maybe<ContentfulLayoutSetOfFourFilterInput>,
};

export type ContentfulLayoutSetOfFourGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulLayoutSetOfFourEdge>,
  nodes: Array<ContentfulLayoutSetOfFour>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutSetOfFourSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLayoutSetOfFourFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulLayoutSetOfFourSys = {
  contentType?: Maybe<ContentfulLayoutSetOfFourSysContentType>,
};

export type ContentfulLayoutSetOfFourSysContentType = {
  sys?: Maybe<ContentfulLayoutSetOfFourSysContentTypeSys>,
};

export type ContentfulLayoutSetOfFourSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLayoutSetOfFourSysContentTypeSysFilterInput>,
};

export type ContentfulLayoutSetOfFourSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutSetOfFourSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutSetOfFourSysFilterInput = {
  contentType?: Maybe<ContentfulLayoutSetOfFourSysContentTypeFilterInput>,
};

export type ContentfulLayoutSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLayoutFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulLayoutSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulLayoutSysContentType>,
};

export type ContentfulLayoutSysContentType = {
  sys?: Maybe<ContentfulLayoutSysContentTypeSys>,
};

export type ContentfulLayoutSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLayoutSysContentTypeSysFilterInput>,
};

export type ContentfulLayoutSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulLayoutSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulLayoutSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulLayoutSysContentTypeFilterInput>,
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  src?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulService = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  headline?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  service?: Maybe<Array<Maybe<ContentfulService>>>,
  description?: Maybe<ContentfulServiceDescriptionTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulServiceSys>,
  node_locale?: Maybe<Scalars['String']>,
  ctaLabel?: Maybe<Scalars['String']>,
  services?: Maybe<Array<Maybe<ContentfulService>>>,
  payoff?: Maybe<Scalars['String']>,
  childContentfulServiceDescriptionTextNode?: Maybe<ContentfulServiceDescriptionTextNode>,
};


export type ContentfulServiceCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulServiceUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulServiceConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulServiceEdge>,
  nodes: Array<ContentfulService>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulServiceGroupConnection>,
};


export type ContentfulServiceConnectionDistinctArgs = {
  field: ContentfulServiceFieldsEnum
};


export type ContentfulServiceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulServiceFieldsEnum
};

export type ContentfulServiceDescriptionTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  description?: Maybe<Scalars['String']>,
};

export type ContentfulServiceDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulServiceDescriptionTextNodeEdge>,
  nodes: Array<ContentfulServiceDescriptionTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulServiceDescriptionTextNodeGroupConnection>,
};


export type ContentfulServiceDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulServiceDescriptionTextNodeFieldsEnum
};


export type ContentfulServiceDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulServiceDescriptionTextNodeFieldsEnum
};

export type ContentfulServiceDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulServiceDescriptionTextNode>,
  node: ContentfulServiceDescriptionTextNode,
  previous?: Maybe<ContentfulServiceDescriptionTextNode>,
};

export type ContentfulServiceDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description';

export type ContentfulServiceDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulServiceDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulServiceDescriptionTextNodeEdge>,
  nodes: Array<ContentfulServiceDescriptionTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulServiceDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulServiceDescriptionTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulServiceEdge = {
  next?: Maybe<ContentfulService>,
  node: ContentfulService,
  previous?: Maybe<ContentfulService>,
};

export type ContentfulServiceFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'headline' |
  'slug' |
  'service' |
  'service___id' |
  'service___parent___id' |
  'service___parent___parent___id' |
  'service___parent___parent___children' |
  'service___parent___children' |
  'service___parent___children___id' |
  'service___parent___children___children' |
  'service___parent___internal___content' |
  'service___parent___internal___contentDigest' |
  'service___parent___internal___description' |
  'service___parent___internal___fieldOwners' |
  'service___parent___internal___ignoreType' |
  'service___parent___internal___mediaType' |
  'service___parent___internal___owner' |
  'service___parent___internal___type' |
  'service___children' |
  'service___children___id' |
  'service___children___parent___id' |
  'service___children___parent___children' |
  'service___children___children' |
  'service___children___children___id' |
  'service___children___children___children' |
  'service___children___internal___content' |
  'service___children___internal___contentDigest' |
  'service___children___internal___description' |
  'service___children___internal___fieldOwners' |
  'service___children___internal___ignoreType' |
  'service___children___internal___mediaType' |
  'service___children___internal___owner' |
  'service___children___internal___type' |
  'service___internal___content' |
  'service___internal___contentDigest' |
  'service___internal___description' |
  'service___internal___fieldOwners' |
  'service___internal___ignoreType' |
  'service___internal___mediaType' |
  'service___internal___owner' |
  'service___internal___type' |
  'service___title' |
  'service___headline' |
  'service___slug' |
  'service___service' |
  'service___service___id' |
  'service___service___parent___id' |
  'service___service___parent___children' |
  'service___service___children' |
  'service___service___children___id' |
  'service___service___children___children' |
  'service___service___internal___content' |
  'service___service___internal___contentDigest' |
  'service___service___internal___description' |
  'service___service___internal___fieldOwners' |
  'service___service___internal___ignoreType' |
  'service___service___internal___mediaType' |
  'service___service___internal___owner' |
  'service___service___internal___type' |
  'service___service___title' |
  'service___service___headline' |
  'service___service___slug' |
  'service___service___service' |
  'service___service___service___id' |
  'service___service___service___children' |
  'service___service___service___title' |
  'service___service___service___headline' |
  'service___service___service___slug' |
  'service___service___service___service' |
  'service___service___service___spaceId' |
  'service___service___service___contentful_id' |
  'service___service___service___createdAt' |
  'service___service___service___updatedAt' |
  'service___service___service___node_locale' |
  'service___service___service___ctaLabel' |
  'service___service___service___services' |
  'service___service___service___payoff' |
  'service___service___description___id' |
  'service___service___description___children' |
  'service___service___description___description' |
  'service___service___spaceId' |
  'service___service___contentful_id' |
  'service___service___createdAt' |
  'service___service___updatedAt' |
  'service___service___sys___revision' |
  'service___service___node_locale' |
  'service___service___ctaLabel' |
  'service___service___services' |
  'service___service___services___id' |
  'service___service___services___children' |
  'service___service___services___title' |
  'service___service___services___headline' |
  'service___service___services___slug' |
  'service___service___services___service' |
  'service___service___services___spaceId' |
  'service___service___services___contentful_id' |
  'service___service___services___createdAt' |
  'service___service___services___updatedAt' |
  'service___service___services___node_locale' |
  'service___service___services___ctaLabel' |
  'service___service___services___services' |
  'service___service___services___payoff' |
  'service___service___payoff' |
  'service___service___childContentfulServiceDescriptionTextNode___id' |
  'service___service___childContentfulServiceDescriptionTextNode___children' |
  'service___service___childContentfulServiceDescriptionTextNode___description' |
  'service___description___id' |
  'service___description___parent___id' |
  'service___description___parent___children' |
  'service___description___children' |
  'service___description___children___id' |
  'service___description___children___children' |
  'service___description___internal___content' |
  'service___description___internal___contentDigest' |
  'service___description___internal___description' |
  'service___description___internal___fieldOwners' |
  'service___description___internal___ignoreType' |
  'service___description___internal___mediaType' |
  'service___description___internal___owner' |
  'service___description___internal___type' |
  'service___description___description' |
  'service___spaceId' |
  'service___contentful_id' |
  'service___createdAt' |
  'service___updatedAt' |
  'service___sys___revision' |
  'service___node_locale' |
  'service___ctaLabel' |
  'service___services' |
  'service___services___id' |
  'service___services___parent___id' |
  'service___services___parent___children' |
  'service___services___children' |
  'service___services___children___id' |
  'service___services___children___children' |
  'service___services___internal___content' |
  'service___services___internal___contentDigest' |
  'service___services___internal___description' |
  'service___services___internal___fieldOwners' |
  'service___services___internal___ignoreType' |
  'service___services___internal___mediaType' |
  'service___services___internal___owner' |
  'service___services___internal___type' |
  'service___services___title' |
  'service___services___headline' |
  'service___services___slug' |
  'service___services___service' |
  'service___services___service___id' |
  'service___services___service___children' |
  'service___services___service___title' |
  'service___services___service___headline' |
  'service___services___service___slug' |
  'service___services___service___service' |
  'service___services___service___spaceId' |
  'service___services___service___contentful_id' |
  'service___services___service___createdAt' |
  'service___services___service___updatedAt' |
  'service___services___service___node_locale' |
  'service___services___service___ctaLabel' |
  'service___services___service___services' |
  'service___services___service___payoff' |
  'service___services___description___id' |
  'service___services___description___children' |
  'service___services___description___description' |
  'service___services___spaceId' |
  'service___services___contentful_id' |
  'service___services___createdAt' |
  'service___services___updatedAt' |
  'service___services___sys___revision' |
  'service___services___node_locale' |
  'service___services___ctaLabel' |
  'service___services___services' |
  'service___services___services___id' |
  'service___services___services___children' |
  'service___services___services___title' |
  'service___services___services___headline' |
  'service___services___services___slug' |
  'service___services___services___service' |
  'service___services___services___spaceId' |
  'service___services___services___contentful_id' |
  'service___services___services___createdAt' |
  'service___services___services___updatedAt' |
  'service___services___services___node_locale' |
  'service___services___services___ctaLabel' |
  'service___services___services___services' |
  'service___services___services___payoff' |
  'service___services___payoff' |
  'service___services___childContentfulServiceDescriptionTextNode___id' |
  'service___services___childContentfulServiceDescriptionTextNode___children' |
  'service___services___childContentfulServiceDescriptionTextNode___description' |
  'service___payoff' |
  'service___childContentfulServiceDescriptionTextNode___id' |
  'service___childContentfulServiceDescriptionTextNode___parent___id' |
  'service___childContentfulServiceDescriptionTextNode___parent___children' |
  'service___childContentfulServiceDescriptionTextNode___children' |
  'service___childContentfulServiceDescriptionTextNode___children___id' |
  'service___childContentfulServiceDescriptionTextNode___children___children' |
  'service___childContentfulServiceDescriptionTextNode___internal___content' |
  'service___childContentfulServiceDescriptionTextNode___internal___contentDigest' |
  'service___childContentfulServiceDescriptionTextNode___internal___description' |
  'service___childContentfulServiceDescriptionTextNode___internal___fieldOwners' |
  'service___childContentfulServiceDescriptionTextNode___internal___ignoreType' |
  'service___childContentfulServiceDescriptionTextNode___internal___mediaType' |
  'service___childContentfulServiceDescriptionTextNode___internal___owner' |
  'service___childContentfulServiceDescriptionTextNode___internal___type' |
  'service___childContentfulServiceDescriptionTextNode___description' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___description' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'ctaLabel' |
  'services' |
  'services___id' |
  'services___parent___id' |
  'services___parent___parent___id' |
  'services___parent___parent___children' |
  'services___parent___children' |
  'services___parent___children___id' |
  'services___parent___children___children' |
  'services___parent___internal___content' |
  'services___parent___internal___contentDigest' |
  'services___parent___internal___description' |
  'services___parent___internal___fieldOwners' |
  'services___parent___internal___ignoreType' |
  'services___parent___internal___mediaType' |
  'services___parent___internal___owner' |
  'services___parent___internal___type' |
  'services___children' |
  'services___children___id' |
  'services___children___parent___id' |
  'services___children___parent___children' |
  'services___children___children' |
  'services___children___children___id' |
  'services___children___children___children' |
  'services___children___internal___content' |
  'services___children___internal___contentDigest' |
  'services___children___internal___description' |
  'services___children___internal___fieldOwners' |
  'services___children___internal___ignoreType' |
  'services___children___internal___mediaType' |
  'services___children___internal___owner' |
  'services___children___internal___type' |
  'services___internal___content' |
  'services___internal___contentDigest' |
  'services___internal___description' |
  'services___internal___fieldOwners' |
  'services___internal___ignoreType' |
  'services___internal___mediaType' |
  'services___internal___owner' |
  'services___internal___type' |
  'services___title' |
  'services___headline' |
  'services___slug' |
  'services___service' |
  'services___service___id' |
  'services___service___parent___id' |
  'services___service___parent___children' |
  'services___service___children' |
  'services___service___children___id' |
  'services___service___children___children' |
  'services___service___internal___content' |
  'services___service___internal___contentDigest' |
  'services___service___internal___description' |
  'services___service___internal___fieldOwners' |
  'services___service___internal___ignoreType' |
  'services___service___internal___mediaType' |
  'services___service___internal___owner' |
  'services___service___internal___type' |
  'services___service___title' |
  'services___service___headline' |
  'services___service___slug' |
  'services___service___service' |
  'services___service___service___id' |
  'services___service___service___children' |
  'services___service___service___title' |
  'services___service___service___headline' |
  'services___service___service___slug' |
  'services___service___service___service' |
  'services___service___service___spaceId' |
  'services___service___service___contentful_id' |
  'services___service___service___createdAt' |
  'services___service___service___updatedAt' |
  'services___service___service___node_locale' |
  'services___service___service___ctaLabel' |
  'services___service___service___services' |
  'services___service___service___payoff' |
  'services___service___description___id' |
  'services___service___description___children' |
  'services___service___description___description' |
  'services___service___spaceId' |
  'services___service___contentful_id' |
  'services___service___createdAt' |
  'services___service___updatedAt' |
  'services___service___sys___revision' |
  'services___service___node_locale' |
  'services___service___ctaLabel' |
  'services___service___services' |
  'services___service___services___id' |
  'services___service___services___children' |
  'services___service___services___title' |
  'services___service___services___headline' |
  'services___service___services___slug' |
  'services___service___services___service' |
  'services___service___services___spaceId' |
  'services___service___services___contentful_id' |
  'services___service___services___createdAt' |
  'services___service___services___updatedAt' |
  'services___service___services___node_locale' |
  'services___service___services___ctaLabel' |
  'services___service___services___services' |
  'services___service___services___payoff' |
  'services___service___payoff' |
  'services___service___childContentfulServiceDescriptionTextNode___id' |
  'services___service___childContentfulServiceDescriptionTextNode___children' |
  'services___service___childContentfulServiceDescriptionTextNode___description' |
  'services___description___id' |
  'services___description___parent___id' |
  'services___description___parent___children' |
  'services___description___children' |
  'services___description___children___id' |
  'services___description___children___children' |
  'services___description___internal___content' |
  'services___description___internal___contentDigest' |
  'services___description___internal___description' |
  'services___description___internal___fieldOwners' |
  'services___description___internal___ignoreType' |
  'services___description___internal___mediaType' |
  'services___description___internal___owner' |
  'services___description___internal___type' |
  'services___description___description' |
  'services___spaceId' |
  'services___contentful_id' |
  'services___createdAt' |
  'services___updatedAt' |
  'services___sys___revision' |
  'services___node_locale' |
  'services___ctaLabel' |
  'services___services' |
  'services___services___id' |
  'services___services___parent___id' |
  'services___services___parent___children' |
  'services___services___children' |
  'services___services___children___id' |
  'services___services___children___children' |
  'services___services___internal___content' |
  'services___services___internal___contentDigest' |
  'services___services___internal___description' |
  'services___services___internal___fieldOwners' |
  'services___services___internal___ignoreType' |
  'services___services___internal___mediaType' |
  'services___services___internal___owner' |
  'services___services___internal___type' |
  'services___services___title' |
  'services___services___headline' |
  'services___services___slug' |
  'services___services___service' |
  'services___services___service___id' |
  'services___services___service___children' |
  'services___services___service___title' |
  'services___services___service___headline' |
  'services___services___service___slug' |
  'services___services___service___service' |
  'services___services___service___spaceId' |
  'services___services___service___contentful_id' |
  'services___services___service___createdAt' |
  'services___services___service___updatedAt' |
  'services___services___service___node_locale' |
  'services___services___service___ctaLabel' |
  'services___services___service___services' |
  'services___services___service___payoff' |
  'services___services___description___id' |
  'services___services___description___children' |
  'services___services___description___description' |
  'services___services___spaceId' |
  'services___services___contentful_id' |
  'services___services___createdAt' |
  'services___services___updatedAt' |
  'services___services___sys___revision' |
  'services___services___node_locale' |
  'services___services___ctaLabel' |
  'services___services___services' |
  'services___services___services___id' |
  'services___services___services___children' |
  'services___services___services___title' |
  'services___services___services___headline' |
  'services___services___services___slug' |
  'services___services___services___service' |
  'services___services___services___spaceId' |
  'services___services___services___contentful_id' |
  'services___services___services___createdAt' |
  'services___services___services___updatedAt' |
  'services___services___services___node_locale' |
  'services___services___services___ctaLabel' |
  'services___services___services___services' |
  'services___services___services___payoff' |
  'services___services___payoff' |
  'services___services___childContentfulServiceDescriptionTextNode___id' |
  'services___services___childContentfulServiceDescriptionTextNode___children' |
  'services___services___childContentfulServiceDescriptionTextNode___description' |
  'services___payoff' |
  'services___childContentfulServiceDescriptionTextNode___id' |
  'services___childContentfulServiceDescriptionTextNode___parent___id' |
  'services___childContentfulServiceDescriptionTextNode___parent___children' |
  'services___childContentfulServiceDescriptionTextNode___children' |
  'services___childContentfulServiceDescriptionTextNode___children___id' |
  'services___childContentfulServiceDescriptionTextNode___children___children' |
  'services___childContentfulServiceDescriptionTextNode___internal___content' |
  'services___childContentfulServiceDescriptionTextNode___internal___contentDigest' |
  'services___childContentfulServiceDescriptionTextNode___internal___description' |
  'services___childContentfulServiceDescriptionTextNode___internal___fieldOwners' |
  'services___childContentfulServiceDescriptionTextNode___internal___ignoreType' |
  'services___childContentfulServiceDescriptionTextNode___internal___mediaType' |
  'services___childContentfulServiceDescriptionTextNode___internal___owner' |
  'services___childContentfulServiceDescriptionTextNode___internal___type' |
  'services___childContentfulServiceDescriptionTextNode___description' |
  'payoff' |
  'childContentfulServiceDescriptionTextNode___id' |
  'childContentfulServiceDescriptionTextNode___parent___id' |
  'childContentfulServiceDescriptionTextNode___parent___parent___id' |
  'childContentfulServiceDescriptionTextNode___parent___parent___children' |
  'childContentfulServiceDescriptionTextNode___parent___children' |
  'childContentfulServiceDescriptionTextNode___parent___children___id' |
  'childContentfulServiceDescriptionTextNode___parent___children___children' |
  'childContentfulServiceDescriptionTextNode___parent___internal___content' |
  'childContentfulServiceDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulServiceDescriptionTextNode___parent___internal___description' |
  'childContentfulServiceDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulServiceDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulServiceDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulServiceDescriptionTextNode___parent___internal___owner' |
  'childContentfulServiceDescriptionTextNode___parent___internal___type' |
  'childContentfulServiceDescriptionTextNode___children' |
  'childContentfulServiceDescriptionTextNode___children___id' |
  'childContentfulServiceDescriptionTextNode___children___parent___id' |
  'childContentfulServiceDescriptionTextNode___children___parent___children' |
  'childContentfulServiceDescriptionTextNode___children___children' |
  'childContentfulServiceDescriptionTextNode___children___children___id' |
  'childContentfulServiceDescriptionTextNode___children___children___children' |
  'childContentfulServiceDescriptionTextNode___children___internal___content' |
  'childContentfulServiceDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulServiceDescriptionTextNode___children___internal___description' |
  'childContentfulServiceDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulServiceDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulServiceDescriptionTextNode___children___internal___mediaType' |
  'childContentfulServiceDescriptionTextNode___children___internal___owner' |
  'childContentfulServiceDescriptionTextNode___children___internal___type' |
  'childContentfulServiceDescriptionTextNode___internal___content' |
  'childContentfulServiceDescriptionTextNode___internal___contentDigest' |
  'childContentfulServiceDescriptionTextNode___internal___description' |
  'childContentfulServiceDescriptionTextNode___internal___fieldOwners' |
  'childContentfulServiceDescriptionTextNode___internal___ignoreType' |
  'childContentfulServiceDescriptionTextNode___internal___mediaType' |
  'childContentfulServiceDescriptionTextNode___internal___owner' |
  'childContentfulServiceDescriptionTextNode___internal___type' |
  'childContentfulServiceDescriptionTextNode___description';

export type ContentfulServiceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  headline?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  service?: Maybe<ContentfulServiceFilterListInput>,
  description?: Maybe<ContentfulServiceDescriptionTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulServiceSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  ctaLabel?: Maybe<StringQueryOperatorInput>,
  services?: Maybe<ContentfulServiceFilterListInput>,
  payoff?: Maybe<StringQueryOperatorInput>,
  childContentfulServiceDescriptionTextNode?: Maybe<ContentfulServiceDescriptionTextNodeFilterInput>,
};

export type ContentfulServiceFilterListInput = {
  elemMatch?: Maybe<ContentfulServiceFilterInput>,
};

export type ContentfulServiceGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulServiceEdge>,
  nodes: Array<ContentfulService>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulServiceSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulServiceFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulServiceSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulServiceSysContentType>,
};

export type ContentfulServiceSysContentType = {
  sys?: Maybe<ContentfulServiceSysContentTypeSys>,
};

export type ContentfulServiceSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulServiceSysContentTypeSysFilterInput>,
};

export type ContentfulServiceSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulServiceSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulServiceSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulServiceSysContentTypeFilterInput>,
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulTechnology = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  technology?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulTechnologySys>,
  node_locale?: Maybe<Scalars['String']>,
};


export type ContentfulTechnologyCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulTechnologyUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulTechnologyConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulTechnologyEdge>,
  nodes: Array<ContentfulTechnology>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulTechnologyGroupConnection>,
};


export type ContentfulTechnologyConnectionDistinctArgs = {
  field: ContentfulTechnologyFieldsEnum
};


export type ContentfulTechnologyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulTechnologyFieldsEnum
};

export type ContentfulTechnologyEdge = {
  next?: Maybe<ContentfulTechnology>,
  node: ContentfulTechnology,
  previous?: Maybe<ContentfulTechnology>,
};

export type ContentfulTechnologyFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'technology' |
  'slug' |
  'url' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulTechnologyFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  technology?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulTechnologySysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulTechnologyGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulTechnologyEdge>,
  nodes: Array<ContentfulTechnology>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulTechnologySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTechnologyFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulTechnologySys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulTechnologySysContentType>,
};

export type ContentfulTechnologySysContentType = {
  sys?: Maybe<ContentfulTechnologySysContentTypeSys>,
};

export type ContentfulTechnologySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTechnologySysContentTypeSysFilterInput>,
};

export type ContentfulTechnologySysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulTechnologySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulTechnologySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulTechnologySysContentTypeFilterInput>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL' |
  'INSIDE' |
  'OUTSIDE';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /** 
 * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
 */
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  contentfulAsset?: Maybe<ContentfulAsset>,
  allContentfulAsset: ContentfulAssetConnection,
  contentfulServiceDescriptionTextNode?: Maybe<ContentfulServiceDescriptionTextNode>,
  allContentfulServiceDescriptionTextNode: ContentfulServiceDescriptionTextNodeConnection,
  contentfulService?: Maybe<ContentfulService>,
  allContentfulService: ContentfulServiceConnection,
  contentfulLayoutSetOfFour?: Maybe<ContentfulLayoutSetOfFour>,
  allContentfulLayoutSetOfFour: ContentfulLayoutSetOfFourConnection,
  contentfulClient?: Maybe<ContentfulClient>,
  allContentfulClient: ContentfulClientConnection,
  contentfulLayoutCopyCopyTextNode?: Maybe<ContentfulLayoutCopyCopyTextNode>,
  allContentfulLayoutCopyCopyTextNode: ContentfulLayoutCopyCopyTextNodeConnection,
  contentfulLayoutCopy?: Maybe<ContentfulLayoutCopy>,
  allContentfulLayoutCopy: ContentfulLayoutCopyConnection,
  contentfulTechnology?: Maybe<ContentfulTechnology>,
  allContentfulTechnology: ContentfulTechnologyConnection,
  contentfulLayoutCallToAction?: Maybe<ContentfulLayoutCallToAction>,
  allContentfulLayoutCallToAction: ContentfulLayoutCallToActionConnection,
  contentfulLayoutHeroImage?: Maybe<ContentfulLayoutHeroImage>,
  allContentfulLayoutHeroImage: ContentfulLayoutHeroImageConnection,
  contentfulLayout?: Maybe<ContentfulLayout>,
  allContentfulLayout: ContentfulLayoutConnection,
  contentfulBlogPostBodyRichTextNode?: Maybe<ContentfulBlogPostBodyRichTextNode>,
  allContentfulBlogPostBodyRichTextNode: ContentfulBlogPostBodyRichTextNodeConnection,
  contentfulBlogPost?: Maybe<ContentfulBlogPost>,
  allContentfulBlogPost: ContentfulBlogPostConnection,
  contentfulContentType?: Maybe<ContentfulContentType>,
  allContentfulContentType: ContentfulContentTypeConnection,
  siteBuildMetadata?: Maybe<SiteBuildMetadata>,
  allSiteBuildMetadata: SiteBuildMetadataConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<ContentfulAssetFileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ContentfulFixedFilterInput>,
  resolutions?: Maybe<ContentfulResolutionsFilterInput>,
  fluid?: Maybe<ContentfulFluidFilterInput>,
  sizes?: Maybe<ContentfulSizesFilterInput>,
  resize?: Maybe<ContentfulResizeFilterInput>
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>,
  sort?: Maybe<ContentfulAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulServiceDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulServiceDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulServiceDescriptionTextNodeFilterInput>,
  sort?: Maybe<ContentfulServiceDescriptionTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulServiceArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  headline?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  service?: Maybe<ContentfulServiceFilterListInput>,
  description?: Maybe<ContentfulServiceDescriptionTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulServiceSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  ctaLabel?: Maybe<StringQueryOperatorInput>,
  services?: Maybe<ContentfulServiceFilterListInput>,
  payoff?: Maybe<StringQueryOperatorInput>,
  childContentfulServiceDescriptionTextNode?: Maybe<ContentfulServiceDescriptionTextNodeFilterInput>
};


export type QueryAllContentfulServiceArgs = {
  filter?: Maybe<ContentfulServiceFilterInput>,
  sort?: Maybe<ContentfulServiceSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulLayoutSetOfFourArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  setItems?: Maybe<ContentfulClientFilterListInput>,
  layout?: Maybe<ContentfulLayoutFilterListInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutSetOfFourSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulLayoutSetOfFourArgs = {
  filter?: Maybe<ContentfulLayoutSetOfFourFilterInput>,
  sort?: Maybe<ContentfulLayoutSetOfFourSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulClientArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  layout___set_of_four?: Maybe<ContentfulLayoutSetOfFourFilterListInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulClientSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulClientArgs = {
  filter?: Maybe<ContentfulClientFilterInput>,
  sort?: Maybe<ContentfulClientSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulLayoutCopyCopyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  copy?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulLayoutCopyCopyTextNodeArgs = {
  filter?: Maybe<ContentfulLayoutCopyCopyTextNodeFilterInput>,
  sort?: Maybe<ContentfulLayoutCopyCopyTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulLayoutCopyArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  headline?: Maybe<StringQueryOperatorInput>,
  layout?: Maybe<ContentfulLayoutFilterListInput>,
  copy?: Maybe<ContentfulLayoutCopyCopyTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutCopySysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  appearance?: Maybe<StringQueryOperatorInput>,
  ctaTitle?: Maybe<StringQueryOperatorInput>,
  ctaLink?: Maybe<StringQueryOperatorInput>,
  childContentfulLayoutCopyCopyTextNode?: Maybe<ContentfulLayoutCopyCopyTextNodeFilterInput>
};


export type QueryAllContentfulLayoutCopyArgs = {
  filter?: Maybe<ContentfulLayoutCopyFilterInput>,
  sort?: Maybe<ContentfulLayoutCopySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulTechnologyArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  technology?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulTechnologySysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulTechnologyArgs = {
  filter?: Maybe<ContentfulTechnologyFilterInput>,
  sort?: Maybe<ContentfulTechnologySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulLayoutCallToActionArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  payoff?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutCallToActionSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  layout?: Maybe<ContentfulLayoutFilterListInput>
};


export type QueryAllContentfulLayoutCallToActionArgs = {
  filter?: Maybe<ContentfulLayoutCallToActionFilterInput>,
  sort?: Maybe<ContentfulLayoutCallToActionSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulLayoutHeroImageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  headline?: Maybe<StringQueryOperatorInput>,
  backgroundImage?: Maybe<ContentfulAssetFilterInput>,
  layout?: Maybe<ContentfulLayoutFilterListInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutHeroImageSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulLayoutHeroImageArgs = {
  filter?: Maybe<ContentfulLayoutHeroImageFilterInput>,
  sort?: Maybe<ContentfulLayoutHeroImageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulLayoutArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulLayoutSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulLayoutArgs = {
  filter?: Maybe<ContentfulLayoutFilterInput>,
  sort?: Maybe<ContentfulLayoutSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulBlogPostBodyRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  nodeType?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<ContentfulBlogPostBodyRichTextNodeContentFilterListInput>,
  body?: Maybe<StringQueryOperatorInput>,
  json?: Maybe<JsonQueryOperatorInput>
};


export type QueryAllContentfulBlogPostBodyRichTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>,
  sort?: Maybe<ContentfulBlogPostBodyRichTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogPostSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  childContentfulBlogPostBodyRichTextNode?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>,
  sort?: Maybe<ContentfulBlogPostSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  displayField?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>,
  sort?: Maybe<ContentfulContentTypeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>,
  sort?: Maybe<SiteBuildMetadataSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteBuildMetadataEdge>,
  nodes: Array<SiteBuildMetadata>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteBuildMetadataGroupConnection>,
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteBuildMetadataFieldsEnum
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>,
  node: SiteBuildMetadata,
  previous?: Maybe<SiteBuildMetadata>,
};

export type SiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteBuildMetadataEdge>,
  nodes: Array<SiteBuildMetadata>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export type SiteFieldsEnum = 
  'buildTime' |
  'siteMetadata___title' |
  'siteMetadata___description' |
  'siteMetadata___author' |
  'siteMetadata___siteUrl' |
  'siteMetadata___menuLinks' |
  'siteMetadata___menuLinks___name' |
  'siteMetadata___menuLinks___link' |
  'siteMetadata___languages___langs' |
  'siteMetadata___languages___defaultLangKey' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  path: Scalars['String'],
  component: Scalars['String'],
  internalComponentName: Scalars['String'],
  componentChunkName: Scalars['String'],
  matchPath?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  langKey?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  langKey?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___id' |
  'context___slug' |
  'context___langKey' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___plugins' |
  'pluginCreator___pluginOptions___plugins___resolve' |
  'pluginCreator___pluginOptions___plugins___id' |
  'pluginCreator___pluginOptions___plugins___name' |
  'pluginCreator___pluginOptions___plugins___version' |
  'pluginCreator___pluginOptions___plugins___pluginFilepath' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___langKeyDefault' |
  'pluginCreator___pluginOptions___useLangKeyLayout' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___host' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___pathToConfigModule' |
  'pluginCreator___pluginOptions___omitGoogleFont' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___plugins' |
  'pluginOptions___plugins___resolve' |
  'pluginOptions___plugins___id' |
  'pluginOptions___plugins___name' |
  'pluginOptions___plugins___version' |
  'pluginOptions___plugins___pluginFilepath' |
  'pluginOptions___name' |
  'pluginOptions___path' |
  'pluginOptions___langKeyDefault' |
  'pluginOptions___useLangKeyLayout' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___icon' |
  'pluginOptions___spaceId' |
  'pluginOptions___accessToken' |
  'pluginOptions___host' |
  'pluginOptions___fileName' |
  'pluginOptions___pathToConfigModule' |
  'pluginOptions___omitGoogleFont' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  langKeyDefault?: Maybe<Scalars['String']>,
  useLangKeyLayout?: Maybe<Scalars['Boolean']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  spaceId?: Maybe<Scalars['String']>,
  accessToken?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  pathToConfigModule?: Maybe<Scalars['String']>,
  omitGoogleFont?: Maybe<Scalars['Boolean']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  name?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  langKeyDefault?: Maybe<StringQueryOperatorInput>,
  useLangKeyLayout?: Maybe<BooleanQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  accessToken?: Maybe<StringQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  pathToConfigModule?: Maybe<StringQueryOperatorInput>,
  omitGoogleFont?: Maybe<BooleanQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
  menuLinks?: Maybe<Array<Maybe<SiteSiteMetadataMenuLinks>>>,
  languages?: Maybe<SiteSiteMetadataLanguages>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  menuLinks?: Maybe<SiteSiteMetadataMenuLinksFilterListInput>,
  languages?: Maybe<SiteSiteMetadataLanguagesFilterInput>,
};

export type SiteSiteMetadataLanguages = {
  langs?: Maybe<Array<Maybe<Scalars['String']>>>,
  defaultLangKey?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataLanguagesFilterInput = {
  langs?: Maybe<StringQueryOperatorInput>,
  defaultLangKey?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataMenuLinks = {
  name?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataMenuLinksFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataMenuLinksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataMenuLinksFilterInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'siteUrl'>> }> };

export type SiteMetaDataQueryVariables = {};


export type SiteMetaDataQuery = { site: Maybe<{ siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description' | 'siteUrl'>
      & { menuLinks: Maybe<Array<Maybe<Pick<SiteSiteMetadataMenuLinks, 'name' | 'link'>>>>, languages: Maybe<Pick<SiteSiteMetadataLanguages, 'langs' | 'defaultLangKey'>> }
    )> }> };

export type BlogPagesQueryQueryVariables = {};


export type BlogPagesQueryQuery = { allContentfulBlogPost: { edges: Array<{ node: (
        Pick<ContentfulBlogPost, 'id' | 'title' | 'updatedAt'>
        & { body: Maybe<Pick<ContentfulBlogPostBodyRichTextNode, 'json'>> }
      ) }> } };

export type CasesPageQueryVariables = {};


export type CasesPageQuery = { contentfulLayout: Maybe<Pick<ContentfulLayout, 'slug'>> };

export type ContactPageQueryVariables = {};


export type ContactPageQuery = { contentfulLayout: Maybe<(
    Pick<ContentfulLayout, 'slug' | 'title'>
    & { contentModules: Maybe<Array<Maybe<(
      { __typename: 'ContentfulLayoutCopy' }
      & Pick<ContentfulLayoutCopy, 'appearance' | 'title' | 'ctaTitle' | 'ctaLink' | 'headline'>
      & { copy: Maybe<Pick<ContentfulLayoutCopyCopyTextNode, 'copy'>> }
    )>>> }
  )> };

export type HomePageQueryVariables = {};


export type HomePageQuery = { contentfulLayout: Maybe<(
    Pick<ContentfulLayout, 'title'>
    & { contentModules: Maybe<Array<Maybe<(
      { __typename: 'ContentfulLayoutCopy' }
      & Pick<ContentfulLayoutCopy, 'appearance' | 'title' | 'ctaTitle' | 'ctaLink' | 'headline'>
      & { copy: Maybe<Pick<ContentfulLayoutCopyCopyTextNode, 'copy'>> }
    ) | (
      { __typename: 'ContentfulLayoutHeroImage' }
      & Pick<ContentfulLayoutHeroImage, 'headline'>
      & { backgroundImage: Maybe<{ fluid: Maybe<Pick<ContentfulFluid, 'src'>> }> }
    ) | (
      { __typename: 'ContentfulLayoutSetOfFour' }
      & Pick<ContentfulLayoutSetOfFour, 'id'>
      & { setItems: Maybe<Array<Maybe<Pick<ContentfulClient, 'link' | 'title'>>>> }
    )>>> }
  )>, allContentfulTechnology: { edges: Array<{ node: Pick<ContentfulTechnology, 'technology' | 'url'> }> }, allContentfulService: { edges: Array<{ node: (
        Pick<ContentfulService, 'slug' | 'headline'>
        & { services: Maybe<Array<Maybe<(
          Pick<ContentfulService, 'headline'>
          & { description: Maybe<Pick<ContentfulServiceDescriptionTextNode, 'description'>> }
        )>>>, description: Maybe<Pick<ContentfulServiceDescriptionTextNode, 'description'>> }
      ) }> } };

export type ServicesPageQueryVariables = {};


export type ServicesPageQuery = { contentfulLayout: Maybe<Pick<ContentfulLayout, 'slug'>> };

export type TrainingPageQueryVariables = {};


export type TrainingPageQuery = { contentfulLayout: Maybe<Pick<ContentfulLayout, 'slug' | 'title'>> };

export type ServiceDetailQueryVariables = {
  id: Scalars['String']
};


export type ServiceDetailQuery = { contentfulService: Maybe<(
    Pick<ContentfulService, 'payoff' | 'headline'>
    & { description: Maybe<Pick<ContentfulServiceDescriptionTextNode, 'description'>>, services: Maybe<Array<Maybe<(
      Pick<ContentfulService, 'headline' | 'payoff'>
      & { description: Maybe<Pick<ContentfulServiceDescriptionTextNode, 'description'>> }
    )>>> }
  )> };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
