#### Example asignment

command: `lambda list-functions`

doc: `https://docs.aws.amazon.com/cli/latest/reference/lambda/list-functions.html`

## Mandatory assignments

**Assignment 1:**

command: `aws s3 ls`

doc: `https://docs.aws.amazon.com/cli/latest/reference/s3/presign.html`

number of buckets: `11`

**Assignment 2:**
filename: `hello-hyf.txt`

## Optional Assignments

**Assignment 3:**
command: `aws s3 presign s3://hyf-products-bucket/hello-hyf.txt`

url: `https://hyf-products-bucket.s3.amazonaws.com/hello-hyf.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2F346X675XN7OAVQ%2F20210906%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210906T054127Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b30943489a0b033e3c4dd758c1a55f8cb2fa408d37a1d0808b0639a8d354a3ec`

**Assignment 4:**
command:`aws s3 ls s3://hyf-products-bucket --recursive --human-readable --summarize`
Total Objects: `7`
Total Size: `1.1 GiB`
