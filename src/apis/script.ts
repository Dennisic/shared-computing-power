import httpRequest from "@/request";

// 任务列表：​/v1​/compute-power​/script​/list
interface listParams {
  page: number,
  size: number,
}
export function apiScriptList(params: listParams) {
  return httpRequest({
    url: '/v1/compute-power/script/list',
    method: "get",
    data: params
  });
}

// 查单个任务详情：/v1/compute-power/script/info/${id}
export function apiGetScriptById(id: string) {
  return httpRequest({
    url: `/v1/compute-power/script/info/${id}`,
    method: "get",
  });
}

// 上传脚本：​ /v1/compute-power/upload
export function apiUploadScript(file: string) {
  return httpRequest({
    url: `/v1/compute-power/upload`,
    method: "post",
    data: file
  });
}

// 执行脚本：/v1/compute-power/python
// id: 执行脚本的id
export function apiExecuteScript(id: number) {
  return httpRequest({
    url: `/v1/compute-power/python`,
    method: "post",
    data: id
  });
}

// 取消执行： /v1/compute-power/python/cancel
export function apiCancelExecuteScript(id: number) {
  return httpRequest({
    url: `/v1/compute-power/python/cancel`,
    method: "post",
    data: id
  });
}

// 下载结果： /v1/compute-power/download
export function apiDownloadScript(id: number) {
  return httpRequest({
    url: `/v1/compute-power/download`,
    method: "post",
    data: id
  });
}